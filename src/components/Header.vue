<template>
  <div class="bg__block">
    <header class="bg-[#000000EB] py-4">
      <div class="container">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              class="w-[60px] h-[60px] rounded-full object-cover"
              src="/images/png/logo.jpg"
              alt="logo"
            />
            <span class="text-white text-xl font-semibold">BookStore</span>
          </div>

          <div
            class="flex items-center gap-3 max-w-[300px] w-full text-white border border-white rounded-full py-[6px] px-[15px] max-[970px]:hidden"
          >
            <input
              class="w-full bg-transparent outline-none placeholder-gray-300 text-sm"
              type="search"
              placeholder="Поиск..."
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 22L15 15M17.3333 9.16667C17.3333 13.677 13.677 17.3333 9.16667 17.3333C4.65634 17.3333 1 13.677 1 9.16667C1 4.65634 4.65634 1 9.16667 1C13.677 1 17.3333 4.65634 17.3333 9.16667Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <nav class="max-[970px]:hidden">
            <ul class="flex items-center gap-6">
              <li
                class="text-white text-base font-medium hover:text-gray-300 cursor-pointer"
              >
                Главное
              </li>
              <li
                class="text-white text-base font-medium hover:text-gray-300 cursor-pointer"
              >
                Новинки
              </li>
              <li
                class="text-white text-base font-medium hover:text-gray-300 cursor-pointer"
              >
                Популярное
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4 text-white max-[970px]:hidden">
            <button class="relative">
             <img src="/images/svg/cart.png" alt="">
              <!-- <span
                class="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full"
              >
                3
              </span> -->
            </button>

            <button class="text-sm font-medium hover:underline">Вход</button>

            <button>
              <img class="w-[30px]" src="/images/svg/fav.svg" alt="">
            </button>
          </div>

          <!-- <div class="menu">
            <img src="/images/svg/menu.png" alt="">
          </div> -->
        </div>
      </div>
    </header>

    <section class=" ">
      <div class="container">
        <div class="max-w-[600px] w-full">
          <h1
            class="font-bold text-[62px] text-white pt-[167px]  max-[1000px]:text-[38px]"
          >
            Книги, которые вам хочется купить
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.bg__block {
  background: url("/images/png/bg1.png") center no-repeat;
  height: 700px;
  width: 100%;
  margin: 0 auto;
}
</style>
