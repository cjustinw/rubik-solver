# Rubik's Cube Solver
Aplikasi website untuk menyelesaikan persoalan rubik 3x3 yang dibangun dengan menggunakan framework React JS.

https://cjustinw-rubik-solver.herokuapp.com/


## Installasi Program 
- npm install
- npm start


## Cara Menggunakan Program 
### Input konfigurasi dari file eksternal
- Tekan tombol "Input File"
- Tekan tombol "Choose File"
- Pilih file eksternal dengan format JSON 
  - Konfigurasi file JSON:
  - face1: front side
  - face2: right side
  - face3: back side
  - face4: left side
  - face5: up side
  - face6: down side
- Tekan tombol "Solve"

### Input konfigurasi oleh user
- User dapat memilih warna dari pilihan warna yang tersedia
- Masukkan warna yang dipilih satu persatu pada blok rubik
- Konfigurasi warna harus valid, jika tidak valid maka akan ditampilkan pesan error
- Tekan tombol "Solve"


## Strategi Pencarian Solusi
Algoritma yang digunakan dalam program ini adalah Iterative deepening A*. IDA* dipilih karena merupakan 
pengembangan lebih lanjut dari algoritma yang sudah dipelajari dalam mata kuliah Strategi Algoritma yaitu DFS dan A* search, 
selain itu dengan adanya fungsi heuristik yang digunakan dalam algoritma DFS maka jumlah simpul yang akan dikunjungi dapat
dipangkas.

### Algoritma IDA* dalam persoalan rubik
- Menggunakan algoritma DFS dengan fungsi heuristik
- Fungsi heuristik yang digunakan adalah dengan mencari nilai maksimum antara jumlah Manhattan Distance masing-masing blok
corner pada state saat ini untuk dapat sampai ke goal state dengan jumlah Manhattan Distance masing-masing blok edge state saat
ini untuk dapat sampai ke goal state. Masing-masing jumlah corner dan edge dibagi 4 dan dicari nilai maksimum antara keduanya.
- Algoritma ini memiliki kompleksitas waktu O(b^m) dan kompleksitas ruang O(bm), dengan b adalah maksimum branching factor dan m 
adalah maksimum kedalaman dari tree.


## Framework/Library
- React JS


## Referensi
- https://en.wikipedia.org/wiki/Iterative_deepening_A*
- https://github.com/orsenthil/coursedocs/blob/master/gatech/cs6601/lesson_2_challenge_2.rst


## Tentang
Christopher Justine William 13519006

