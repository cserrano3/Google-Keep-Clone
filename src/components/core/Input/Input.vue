<template>
	<div class="input__with-title">
			<input
				type="text"
				:value="value"
				@input="updateValue"
				class="input--field"
				:placeholder="placeholder"
			/>
	</div>
</template>
<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: 'Title'
		},
		value: {
			type: String
		}
	},
	methods: {
		updateValue(event) {
			this.$emit('input', event.target.value);
		}
	}
}
</script>
<style>

</style>
