const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Menit lari: ", (a) => {
  readline.question("Menit pushup: ", (b) => {
    readline.question("Menit plank: ", (c) => {
      const menitLari = parseInt(a, 10) || 0;
      const menitPushup = parseInt(b, 10) || 0;
      const menitPlank = parseInt(c, 10) || 0;

      let total = 0;

      if (menitLari > 0) {
        total += (menitLari / 5) * 60;
      }
      if (menitPushup > 0) {
        total += (menitPushup / 30) * 200;
      }
      if (menitPlank > 0) {
        total += menitPlank * 5;
      }

      if (total > 0) {
        console.log("Total kalori terbakar: " + Math.round(total));
      } else {
        console.log("Tidak ada aktivitas olahraga.");
      }

      readline.question(
        "\nPilih cabang olahraga untuk membakar " +
          Math.round(total) +
          " kalori (1: Lari, 2: Pushup, 3: Plank): ",
        (pilihan) => {
          let kaloriPerMenit = 0;
          let namaOlahraga = "";

          if (pilihan === "1") {
            kaloriPerMenit = 60 / 5;
            namaOlahraga = "Lari";
          } else if (pilihan === "2") {
            kaloriPerMenit = 200 / 30;
            namaOlahraga = "Pushup";
          } else if (pilihan === "3") {
            kaloriPerMenit = 5;
            namaOlahraga = "Plank";
          }

          if (kaloriPerMenit > 0 && total > 0) {
            const menitDibutuhkan = total / kaloriPerMenit;
            console.log(
              "Dibutuhkan sekitar " +
                Math.ceil(menitDibutuhkan) +
                " menit " +
                namaOlahraga +
                " untuk membakar total kalori tersebut.",
            );
          } else if (kaloriPerMenit === 0) {
            console.log("Pilihan olahraga tidak valid.");
          }

          readline.close();
        },
      );
    });
  });
});
