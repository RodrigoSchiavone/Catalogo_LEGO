import { arrayObjects } from "./dataOrganizer.js";

const input = document.querySelector('#csv_file');
    let csvArray
    let test = false;

    input.addEventListener('change', function (e) {
        const reader = new FileReader();


        reader.readAsText(input.files[0]);

        reader.onload = function () {
            let commaSeparated = reader.result;



            commaSeparated = commaSeparated.replace(/,/g, ".");
            commaSeparated = commaSeparated.replace(/;/g, ",");
            commaSeparated = commaSeparated.replace(/\r\n/g, ",");
            commaSeparated = commaSeparated.replace(/\n/g, ",");
            let csvDataArray = commaSeparated.split(",");
            csvDataArray.pop();

            csvArray = csvDataArray;
            console.log(csvArray)

            arrayObjects(csvArray);
        }
    }, false)

