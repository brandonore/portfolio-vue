<script setup>
import { githubUrl, emailUrl } from '../links'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mx-auto max-w-[1200px] px-5 sm:px-8 py-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm text-primary-light">
    <p>© {{ year }} Brandon Ore</p>
    <nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Elsewhere">
      <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline underline-offset-4">GitHub</a>
      <a :href="emailUrl" class="hover:text-primary hover:underline underline-offset-4">Email</a>
      <a href="https://pomkatsu.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline underline-offset-4">Pomkatsu</a>
    </nav>
  </footer>
</template>
