# Ngôn ngữ tiền xử lý scss

## Cài đặt trình biên dịch

1. Cài đặt NodeJS

2. Cài đặt SASS

npm i sass -g

## Câu lệnh biên dịch SCSS sang CSS

1. Biên dịch cả folder scss sang css

sass folder_scss:foldercss

Watch mode

sass folder_scss:folder --watch

2. Biên dịch 1 file scss sang 1 file css

sass duong-dan-file-scss duong-dan-file-css
vd: sass scss/ex01.scss build/style.css

3. Nén file CSS từ file SCSS
   => Tạo ra file .min (minify)

sass duong-dan-file-scss duong-dan-file --style compressed
vd: sass scss/ex01.scss build/style.min.css --style compressed
