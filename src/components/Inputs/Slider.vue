<template>
  <div class="slide-container">
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="slider"
      v-model="actualValue"
      @input="handleChangeValue"
    />
  </div>
</template>

<script>
export default {
  props: ["min", "max", "value", "step"],
  data() {
    return {
      actualValue: this.$props.value,
    };
  },
  methods: {
    handleChangeValue() {
      this.$emit("actualValue", this.actualValue);
    },
  },
};
</script>

<style>
.slide-container {
  width: 100%;
}

/* The slider itself */
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%; /* Full-width */
  height: 5px; /* Specified height */
  background: linear-gradient(
    270deg,
    rgba(255, 4, 4, 0.882716) 0%,
    #eaecef 100%
  ); /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: #ff0404; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
  transition: 0.3s;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  transition: 0.3s;
  background: -moz-linear-gradient(
    270deg,
    #eaecef 51.15%,
    rgba(255, 4, 4, 0.882716) 51.82%,
    rgba(255, 4, 4, 0) 100%
  );
  background: -webkit-gradient(
    270deg,
    #eaecef 51.15%,
    rgba(255, 4, 4, 0.882716) 51.82%,
    rgba(255, 4, 4, 0) 100%
  );
  background: -webkit-linear-gradient(
    270deg,
    #eaecef 51.15%,
    rgba(255, 4, 4, 0.882716) 51.82%,
    rgba(255, 4, 4, 0) 100%
  );
  background: -o-linear-gradient(
    270deg,
    #eaecef 51.15%,
    rgba(255, 4, 4, 0.882716) 51.82%,
    rgba(255, 4, 4, 0) 100%
  );
  background: -ms-linear-gradient(
    270deg,
    #eaecef 51.15%,
    rgba(255, 4, 4, 0.882716) 51.82%,
    rgba(255, 4, 4, 0) 100%
  );
  background: linear-gradient(
    270deg,
    #eaecef 51.15%,
    rgba(255, 4, 4, 0.882716) 51.82%,
    rgba(255, 4, 4, 0) 100%
  );
  cursor: pointer; /* Cursor on hover */
}
</style>
