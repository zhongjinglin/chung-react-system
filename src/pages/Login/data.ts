export const userInfo = {
	account: 'admin',
	password: '123'
}

const accountText = '账号登录'
const qrcodeText = '扫码登录'

export const loginTypes = {
	account: {
		title: accountText,
		tip: qrcodeText,
		className: 'account'
	},
	qrcode: {
		title: qrcodeText,
		tip: accountText,
		className: 'qrcode'
	}
}
