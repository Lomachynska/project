document.addEventListener('DOMContentLoaded', function () {
  const csvFilePath = '/Users/olga/Desktop/технології/project/Cities.csv';
  const departureCitySelect = document.getElementById('departure-city');
  const arrivalCitySelect = document.getElementById('arrival-city');

  Papa.parse(csvFilePath, {
    download: true,
    header: true,
    complete: function (results) {
      const cities = results.data;

      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.object_code;
        option.text = city.object_name;

        departureCitySelect.add(option.cloneNode(true));
        arrivalCitySelect.add(option);
      });
    }
  });
});
