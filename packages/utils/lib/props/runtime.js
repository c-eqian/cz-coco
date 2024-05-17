"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildProps = exports.buildProp = exports.isEpProp = exports.definePropType = exports.epPropKey = void 0;
const lodash_unified_1 = require("lodash-unified");
const vue_1 = require("vue");
const objects_1 = require("../objects");
const types_1 = require("../types");
exports.epPropKey = '__epPropKey';
const definePropType = (val) => val;
exports.definePropType = definePropType;
const isEpProp = (val) => (0, types_1.isObject)(val) && !!val[exports.epPropKey];
exports.isEpProp = isEpProp;
const buildProp = (prop, key) => {
    if (!(0, types_1.isObject)(prop) || (0, exports.isEpProp)(prop))
        return prop;
    const { values, required, default: defaultValue, type, validator } = prop;
    const _validator = values || validator
        ? (val) => {
            let valid = false;
            let allowedValues = [];
            if (values) {
                allowedValues = Array.from(values);
                if ((0, objects_1.hasOwn)(prop, 'default')) {
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
                (0, vue_1.warn)(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
            }
            return valid;
        }
        : undefined;
    const epProp = {
        type,
        required: !!required,
        validator: _validator,
        [exports.epPropKey]: true
    };
    if ((0, objects_1.hasOwn)(prop, 'default'))
        epProp.default = defaultValue;
    return epProp;
};
exports.buildProp = buildProp;
const buildProps = (props) => (0, lodash_unified_1.fromPairs)(Object.entries(props).map(([key, option]) => [
    key,
    (0, exports.buildProp)(option, key)
]));
exports.buildProps = buildProps;
