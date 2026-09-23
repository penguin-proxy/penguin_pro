"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const registerButton = document.getElementById("uv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
	error.textContent = "🐧 penguin-pro: サービスワーカーが登録されていません。";
	registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
	try {
		await registerSW();
		location.reload();
	} catch (err) {
		error.textContent = "🐧 penguin-pro: サービスワーカーの登録に失敗しました。";
		errorCode.textContent = err.toString();
		registerButton.classList.remove("show");
	}
});
