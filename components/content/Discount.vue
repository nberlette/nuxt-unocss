<template>
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-center text-4xl uppercase font-semibold mb-10">
			{{ title }}
		</h1>
		<div class="text-center">
			<NuxtLink :to="url" title="{{title}} - {{cta}}" class="p-0.5 rounded bg-white inline-block" role="button">
				<span
					class="block rounded px-5 py-3 w-full h-full bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-all"
				>{{ cta }}</span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			title?: string;
			cta?: string;
			url?: string;
		}>(),
		{
			title: 'Up to 50% off!',
			cta: 'Get Discount',
			url: '#discount',
		},
	)
</script>

<style scoped lang="postcss">
	/* */
</style>
