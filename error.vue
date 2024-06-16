<script setup lang="js">
// eslint-disable-next-line vue/require-default-prop
defineProps({ error: Object })

const handleError = () => {
	clearError({
		redirect: '/'
	})
}
</script>

<template>
	<div>
		<NuxtLayout>
			<div class="page-error">
				<main>
					<UContainer>
						<h1>Error: {{ error.statusCode }}</h1>
						<p>{{ error.statusMessage }}</p>

						<button @click="handleError">На Главную</button>
					</UContainer>
				</main>
			</div>
		</NuxtLayout>
	</div>
</template>
