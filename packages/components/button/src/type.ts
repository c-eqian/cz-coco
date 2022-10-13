import type { ExtractPropTypes } from "vue"
export const buttonProps = {
    type:{
        type:String
    }
}

export type IButtonProps = ExtractPropTypes<typeof buttonProps>