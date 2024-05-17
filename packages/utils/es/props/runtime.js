import { fromPairs } from 'lodash-unified';
import { warn } from 'vue';
import { hasOwn } from '../objects';
import { isObject } from '../types';
export const epPropKey = '__epPropKey';
export const definePropType = (val) => val;
export const isEpProp = (val) => isObject(val) && !!val[epPropKey];
export const buildProp = (prop, key) => {
    if (!isObject(prop) || isEpProp(prop))
        return prop;
    const { values, required, default: defaultValue, type, validator } = prop;
    const _validator = values || validator
        ? (val) => {
            let valid = false;
            let allowedValues = [];
            if (values) {
                allowedValues = Array.from(values);
                if (hasOwn(prop, 'default')) {
                    allowedValues.push(defaultValue);
                }
                valid || (valid = allowedValues.includes(val));
            }
            if (validator)
                valid || (valid = validator(val));
            if (!valid && allowedValues.length > 0) {
                const allowValuesText = [...new Set(allowedValues)]
                    .map(value => JSON.stringify(value))
                    .join(', ');
                warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
            }
            return valid;
        }
        : undefined;
    const epProp = {
        type,
        required: !!required,
        validator: _validator,
        [epPropKey]: true
    };
    if (hasOwn(prop, 'default'))
        epProp.default = defaultValue;
    return epProp;
};
export const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option, key)
]));
