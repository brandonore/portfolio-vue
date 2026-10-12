<script setup>
import { emailUrl } from '../links'
</script>

<template>
  <header class="mx-auto max-w-[1360px] px-5 sm:px-8">
    <nav class="flex items-center justify-between h-20" aria-label="Main">
      <a href="#top" class="font-brand text-[1.35rem] font-bold tracking-tight">Brandon Ore</a>
      <div class="flex items-center gap-1 text-[15px]">
        <a href="#work" class="hidden sm:block px-3 py-2 rounded-full hover:bg-secondary-light">Work</a>
        <a href="#about" class="hidden sm:block px-3 py-2 rounded-full hover:bg-secondary-light">About</a>
        <a :href="emailUrl" class="ml-2 px-4 py-2 rounded-full bg-primary text-secondary font-medium whitespace-nowrap hover:bg-primary-dark">Email me</a>
      </div>
    </nav>
  </header>
</template>
