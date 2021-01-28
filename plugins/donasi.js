let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis            [0831396683834]
│ • Indosat      [085892910131]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285892910131
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
