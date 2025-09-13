<template>
  <div class="flex lg:flex-1">
    <router-link
      to="/"
      class="flex items-center gap-3 rounded-lg px-2 py-1 transition-all duration-300 hover:scale-105 hover:bg-gray-100/40 active:scale-95"
    >
      <!-- Logo -->
      <img
        class="h-12 md:h-14 w-auto drop-shadow-md"
        width="300"
        height="80"
        src="/favicon.ico"
        alt="logo_wb"
        loading="lazy"
      />

      <!-- Divider -->
      <span class="hidden md:block text-gray-400">|</span>

      <!-- Text -->
      <span
        class="hidden md:block text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
      >
        @rispace
      </span>
    </router-link>
  </div>
</template>
