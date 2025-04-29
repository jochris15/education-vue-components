# Vue Components

## What is [Components](https://vuejs.org/guide/essentials/component-basics.html) in Vue?

Bedasarkan dokumentasi vue, komponen merupakan code yang independent & reusable. Biasanya, aplikasi terbagi menjadi beberapa komponen nested. Dalam vue, masing-masing komponen memiliki konten yang independent dan logicnya masing-masing.


## How to make components?
1. Buat folder components di dalam folder `src`
   - Penamaan folder menggunakan huruf kecil
1. Buat file baru di dalam folder `src/components/`.
   - Contoh: `MyComponent.vue`
   - Penamaan file menggunakan PascalCase
   - Penamaan file harus multiword
2. Buat template, script, dan style sesuai kebutuhan di dalam file tersebut
3. Import komponen tersebut di dalam file `App.vue` & tambahkan properti `components` di dalam export default script `App.vue`.
4. Gunakan komponen tersebut di dalam template
   - Contoh: `<MyComponent />`

## [Component registration](https://vuejs.org/guide/components/registration.html)
1. **Global registration**: Komponen dapat didaftarkan secara global dengan menggunakan `app.component()` di dalam file `main.js`. Komponen yang didaftarkan secara global dapat digunakan di seluruh aplikasi tanpa perlu mengimportnya di dalam setiap file.
2. **Local registration**: Komponen dapat didaftarkan secara lokal dengan mengimportnya di dalam file yang ingin digunakan. Komponen yang didaftarkan secara lokal hanya dapat digunakan di dalam file tersebut.

## How to pass data between components?
1. [**Props**](https://vuejs.org/guide/components/props.html): Props adalah salah satu cara untuk mengirim data dari parent ke child component. Props bersifat read-only, artinya child component tidak dapat mengubah nilai props yang diterima dari parent.

2. [**Event**](https://vuejs.org/guide/components/events.html): Event adalah salah satu cara untuk mengirim data dari child ke parent component. Child component dapat mengirim event ke parent component dengan menggunakan `$emit()`. Parent component dapat menangkap event tersebut dengan menggunakan `v-on` atau `@` di dalam template.

3. [**Slots**](https://vuejs.org/guide/components/slots.html): Slots adalah salah satu cara untuk mengirim data dari parent ke child component dengan menggunakan template. Parent component dapat mengirim template ke child component dengan menggunakan `<slot>` di dalam template child component. Child component dapat menampilkan template tersebut di dalam template-nya.

