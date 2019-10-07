var friends = [{
    name: "Anna Wintour",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjX1_7d0YjlAhXIvp4KHVs6CpoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.telegraph.co.uk%2Fnews%2Fcelebritynews%2F11640778%2FFashions-ice-queen-Anna-Wintour-opens-up-about-family.html&psig=AOvVaw3XVpIgxcvBZ8e8Bi7S4eYB&ust=1570485677323044 ",
    scores: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
}, {
    name: "Virgil Abloh",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjBw93H0YjlAhXKup4KHXF5B1YQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVirgil_Abloh&psig=AOvVaw1EwZWwcLX9Rnci1TvWHwN7&ust=1570485769947770",
    scores: ["5", "4", "3", "2", "1", "1", "2", "3", "4", "5"]
}, {
    name: "Vera Wang",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasamfashion.files.wordpress.com%2F2013%2F03%2Fvera-wang.jpg&imgrefurl=https%3A%2F%2Fasamfashion.wordpress.com%2F2013%2F03%2F12%2Fasian-american-fashion-designers-alexander-wang-and-vera-wang%2F&docid=UQSgDjvEr3FkvM&tbnid=B78CsTHnmb2sVM%3A&vet=10ahUKEwiKma-q04jlAhWPuZ4KHa3jD7UQMwiXASgpMCk..i&w=290&h=290&bih=705&biw=719&q=vera%20wang&ved=0ahUKEwiKma-q04jlAhWPuZ4KHa3jD7UQMwiXASgpMCk&iact=mrc&uact=8",
    scores: ["5", "4", "3", "2", "1", "5", "4", "3", "1", "1"]
}, {
    name: "Jason Wu",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fsagacity%2Fimage%2Fupload%2Fc_crop%2Ch_480%2Cw_378%2Cx_0%2Cy_0%2Fc_scale%2Cw_640%2Fv1397404383%2Fjason_wu_sv8d8e.jpg&imgrefurl=https%3A%2F%2Fwww.seattlemet.com%2Farticles%2F2011%2F10%2F7%2Fjason-wu-x-target-october-2011&docid=g0ddzPNio3KPmM&tbnid=uKy7fpH_z4dcqM%3A&vet=10ahUKEwj99PzZ0ojlAhWCup4KHd-oAOAQMwjMAShHMEc..i&w=640&h=813&bih=705&biw=719&q=Jason%20Wu&ved=0ahUKEwj99PzZ0ojlAhWCup4KHd-oAOAQMwjMAShHMEc&iact=mrc&uact=8",
    scores: ["1", "2", "3", "4", "5", "5", "4", "3", "2", "1"]
}, {
    name: "Jenny Packham",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2Ffamily%2F2018%2F09%2F07%2FTELEMMGLPICT000171164040_trans_NvBQzQNjv4Bqqv0yGGrWODi_ZT_qRy4TCcOcuEqcoN786hEwdCHUsXw.jpeg%3Fimwidth%3D450&imgrefurl=https%3A%2F%2Fwww.telegraph.co.uk%2Ffamily%2Fparenting%2Fjenny-packham-always-wanted-design-something-made-people-say%2F&docid=kXZmRRrP-x0X4M&tbnid=9_IgkpwZpgLseM%3A&vet=10ahUKEwjS_a_y44jlAhWH9Z4KHTbiBh8QMwjTASgCMAI..i&w=480&h=300&bih=705&biw=719&q=jenny%20packham%20designer&ved=0ahUKEwjS_a_y44jlAhWH9Z4KHTbiBh8QMwjTASgCMAI&iact=mrc&uact=8",
    scores: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
}, {
    name: "Michael Kors",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsi.wsj.net%2Fpublic%2Fresources%2Fimages%2FEW-AM160_gaudoi_EV_20120209165654.jpg&imgrefurl=https%3A%2F%2Fwww.wsj.com%2Farticles%2FSB10001424052970203711104577200761174419378&docid=M2fFIl6O1E59hM&tbnid=Rm7Dm0RHDhfOpM%3A&vet=10ahUKEwjFxqCR5YjlAhUJvZ4KHaR8B20QMwiPASgEMAQ..i&w=359&h=539&bih=705&biw=719&q=Michael%20Kors%20designer&ved=0ahUKEwjFxqCR5YjlAhUJvZ4KHaR8B20QMwiPASgEMAQ&iact=mrc&uact=8",
    scores: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
}, {
    name: "Anna Sui",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2Fwomen%2F2017%2F05%2F31%2Fanna_trans_NvBQzQNjv4BqBhLOK858p5b0LDLQeH7Qe45yKHUF1exMAtcMXTyIdt0.jpg%3Fimwidth%3D450&imgrefurl=https%3A%2F%2Fwww.telegraph.co.uk%2Fwomen%2Flife%2Fnew-york-fashion-designer-anna-sui-make-work%2F&docid=jt-LOCr_GlE0SM&tbnid=-FEhgMUW6ff0MM%3A&vet=10ahUKEwiX_7Si5IjlAhWB4J4KHcwfAxMQMwj6ASgCMAI..i&w=480&h=300&bih=705&biw=719&q=Anna%20Sui%20designer&ved=0ahUKEwiX_7Si5IjlAhWB4J4KHcwfAxMQMwj6ASgCMAI&iact=mrc&uact=8",
    scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
    name: "Tom Ford",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gq.com%2Fphotos%2F58404ebbd0b2e2f33d3221df%2F1%3A1%2Fw_1500%2Ch_1500%2Cc_limit%2F1216-GQ-FETF02-01-tom-ford-01.jpg&imgrefurl=https%3A%2F%2Fwww.gq.com%2Fstory%2Ftom-ford-interview-nocturnal-animals-moty&docid=Y-jZwTqheCf5rM&tbnid=yzKrZEidxbjscM%3A&vet=10ahUKEwiCuIO65YjlAhWO9Z4KHf3JB_wQMwh7KBEwEQ..i&w=1500&h=1500&bih=705&biw=719&q=%20Tom%20Ford%20designer&ved=0ahUKEwiCuIO65YjlAhWO9Z4KHf3JB_wQMwh7KBEwEQ&iact=mrc&uact=8",
    scores: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
}, {
    name: "Catherine Malandrino",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fprestigefrenchriviera.files.wordpress.com%2F2012%2F09%2Fdesigner-portrait.jpg&imgrefurl=https%3A%2F%2Fprestigefrenchriviera.wordpress.com%2F2012%2F09%2F02%2Fcatherine-malandrino-a-french-designer-in-america%2F&docid=lZEDspuFjniC3M&tbnid=BrJTVFRWfSR9lM%3A&vet=10ahUKEwiL-9K75ojlAhXYqZ4KHY3qCEEQMwiNASgGMAY..i&w=816&h=1056&bih=705&biw=719&q=catherine%20malandrino%20designer&ved=0ahUKEwiL-9K75ojlAhXYqZ4KHY3qCEEQMwiNASgGMAY&iact=mrc&uact=8",
    scores: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
}, {
    name: "Alexander Wang",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0043%2F8471%2F8938%2Fproducts%2F151362555382719214_812x.jpg%3Fv%3D1555121647&imgrefurl=https%3A%2F%2Fwww.omaze.com%2Fproducts%2Falexander-wang-red&docid=icYAUSO1sEgbaM&tbnid=dP10GGDzanULYM%3A&vet=10ahUKEwirrtKZ5ojlAhVQqZ4KHaiEAGAQMwjTASggMCA..i&w=812&h=457&bih=705&biw=719&q=alexander%20wang&ved=0ahUKEwirrtKZ5ojlAhVQqZ4KHaiEAGAQMwjTASggMCA&iact=mrc&uact=8",
    scores: ["5", "2", "5", "2", "5", "4", "5", "1", "1", "5"]
}]

module.exports = friends;

// grab url instead of image file folder