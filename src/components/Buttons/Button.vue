<template>
	<button :class="{ 'btn-outlined': !className, [className]: className }">
		{{ text }}
	</button>
</template>

<script>
export default {
	props: ["text", "className"],
};
</script>

<style>
button {
	box-sizing: border-box;
	border-radius: 5px;
	padding: 12px 32px;

	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;
	cursor: pointer;
	transition: 0.2s;
  border: none;
  outline: none;
}
button.btn-primary {
	background: #ff0404;
	border: 1px solid #ff0404;
	color: #fff;
}
button.btn-primary:hover {
	background: #ff2d2d;
	box-shadow: 0px 20px 35px -10px rgba(255, 45, 45, 0.5);
}

button.btn-outlined {
	background: #fff;
	border: 2px solid #ff0404;
	color: #ff0404;
}
button.btn-outlined:hover {
	background: #ff0404;
	color: #fff;
}

button.btn-light {
  background: #FFFFFF;
  color: #000000;
}
button.btn-light:hover {
  color: #FF0404;
}
</style>