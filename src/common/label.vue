<!--
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-04-01 10:34:33
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-08-19 10:53:58
 -->
 <template>
    <div :class="['label-temp', 'clearfloat','label-temp-' + type ]">
        <div class="label-temp-text">
            <slot name="label">{{label}}</slot>
        </div>
        <div class="label-temp-slot">
            <slot></slot>
        </div>
        <div v-if="showIcon" class="label-temp-icon" :class="iconClass" @click="handleClick"></div>
    </div>
</template>

<script>
import { oneOf } from '&/utils/tools';
export default {
    props: {
        label: {
            type: [String, Number],
            default: 'label'
        },
        type: {
            validator (value) {
                return oneOf(value, ['default', 'border']);
            },
            default: 'default'
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconClass () {
            let classes = [];
            if (this.iconType) {
                classes.push(`label-temp-icon-${this.iconType}`);
            }
            return [
                // 'label-temp-icon',
                {
                    [`label-temp-icon-${this.iconType}`]: this.iconType
                }
            ];
        }
    },
    methods: {
        handleClick (e) {
            this.$emit('on-iconClick', e);
        }
    }
};
</script>

<style lang='scss'>
.label-temp {
	height: 28px;
	display: flex;
	align-items: center;
	&-border {
		border: 1px solid $black;
		background: $white;
		padding: 0 10px;
		.el-input__inner {
			border: 0 !important;
		}
	}
	&-slot {
		flex: 1;
	}
	.label-temp-icon-wj {
		width: 18px;
		height: 14px;
		// background: url('~&/img/wj.png');
	}
}
</style>
