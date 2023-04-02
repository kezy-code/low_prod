var form = document.getElementById("my-form");
    
    


    form.addEventListener("submit", handleSubmit)

    const beatsSection = document.querySelector('.beats');

    async function displayBeats() {
      const records = await fetchRecords();
      const beats = records.map((record) => {
        const fields = record.fields;
        return `
          <div class="beat">
            <img src="${fields.Image[0].url}" alt="${fields.Name}">
            <h3>${fields.Name}</h3>
            <audio controls>
              <source src="${fields.Sound[0].url}" type="audio/mpeg">
            </audio>
          </div>
        `;
      });
      beatsSection.innerHTML = beats.join('');
    }
   
    displayBeats();
