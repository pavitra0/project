'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //km
    this.duration = duration; //min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
  }
}

const run = new Running([39, -18], 5.2, 24, 178)
const cycle = new Cycling([39, -18], 27, 95, 523)

console.log(run, cycle)

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();

    //Form
    form.addEventListener('submit', this._newWorkout.bind(this));

    //show form
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    //geolocation
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function (err) {
          console.log(err);
        }
      );
  }

  _loadMap(pos) {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {}).addTo(
      this.#map
    );

    console.log(this);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    inputType.value =
      inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnCLick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('workout')
      .openPopup();
  }
}

const app = new App();

/////////////////////////////////////////////////////////////////////////
//practice

//f1 ch1
// const marksHeight = 1.69
// const marksMass = 92
// const johnsHeight = 1.95
// const johnsMass = 78
// const johnsBMI = johnsMass / johnsHeight ** 2
// const marksBMI = marksMass / (marksHeight * marksHeight)
// const marksHigherBMI = marksBMI > johnsBMI
// console.log(marksHigherBMI)
// console.log(marksBMI ,johnsBMI )
//f1 ch2
// johnsBMI > marksBMI ? console.log(`Johns BMI ${(johnsBMI).toFixed(2)} is  higher than marks ${(marksBMI).toFixed(2)} BMI`): console.log(`marks ${(marksBMI).toFixed(2)} BMI is higher than johns ${(johnsBMI).toFixed(2)} BMI`)
//
