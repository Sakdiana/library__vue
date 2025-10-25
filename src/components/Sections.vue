<template>
  <main class="bg-gray-50 min-h-screen">
    <section class="py-16 bg-white">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-4">О нас</h2>
          <p class="text-gray-700 mb-4">
            BookStore — это место, где каждый читатель найдет что-то по душе. Мы отбираем лучшие книги для вас, следим за новинками и популярными авторами.
          </p>
          <p class="text-gray-700">
            Наша цель — сделать чтение удобным, приятным и вдохновляющим. Подписывайтесь на обновления и открывайте новые миры с каждой книгой.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-8">Популярные категории</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div class="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <span class="text-orange-500 font-bold text-xl">Horror</span>
          </div>
          <div class="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <span class="text-orange-500 font-bold text-xl">Fantasy</span>
          </div>
          <div class="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <span class="text-orange-500 font-bold text-xl">Detective</span>
          </div>
          <div class="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <span class="text-orange-500 font-bold text-xl">Romance</span>
          </div>
          <div class="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <span class="text-orange-500 font-bold text-xl">Sci-Fi</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-4">Подпишитесь на новости</h2>
        <p class="text-gray-700 mb-6">Будьте в курсе новинок, акций и специальных предложений</p>
        <form class="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Введите ваш email"
            class="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            class="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

