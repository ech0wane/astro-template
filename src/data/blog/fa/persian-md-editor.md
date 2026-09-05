---
author: "author"
pubDatetime: 2026-04-25T10:10:45.51
title: "ویرایشگر Typora و نگارش متون فارسی Markdown"
featured: false
draft: false
archived: false
tags:
  - ابزارها
  - markdown
description: "راهنمای تنظیم ویرایشگر Markdown برای متون دوزبانه و سازگاری با متون فارسی و راست‌به‌چپ."
---

## معرفی

ویرایشگر Typora یکی از ابزارهای محبوب برای نوشتن و ویرایش فایل‌های Markdown است. یکی از چالش‌های متداول هنگام نگارش متون ترکیبی فارسی و انگلیسی، مدیریت صحیح چینش متن (RTL/LTR) و هماهنگی فونت‌هاست. با استفاده از تم‌های سفارشی CSS می‌توان این تجربه را بهبود بخشید. 

## نصب

Arch Linux و مشتقات

```bash
yay -S typora
```

Ubuntu / Debian

```bash
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -
sudo add-apt-repository 'deb https://typora.io/linux ./'
sudo apt-get update
sudo apt-get install typora
```

Fedora

```bash
sudo dnf install typora
```

### باینری رایگان (نسخه قدیمی)

 نسخه های قدیمی تر Typora که رایگان بودن رو میتونی پیدا کنی. (روی AUR یه باینری کامپایل شده هست،‌کافیه typora-free رو سرچ کنی) البته نسخه اصلی هم مثل WinRAR فقط گاهی یادآوری میکنه که باید بخریش و بعد میذاره ادامه بدی :))

## تم CSS کاستوم برای نمایش صحیح متون فارسی / انگلیسی

یکی از بزرگترین مشکلات وقتی با متون ترکیبی فارسی و انگلیسی کار میکنی، بهم ریختگی جهت متن (RTL/LTR) و فونت هاست. خوشبختانه [hadi77ir](https://github.com/hadi77ir) یه تم عالی ساخته که این مشکل رو کاملا حل میکنه.

**رپوی گیتهاب:** https://github.com/hadi77ir/Typora-Persian

### نصب تم

۱. فایل CSS تم رو از رپو دانلود کن

۲. توی Typora برو به `File > Preferences > Appearance > Open Theme Folder`

۳. فایل CSS رو توی این پوشه کپی کن

۴. Typora رو ری استارت کن

۵. از منوی `Themes` تم فارسی رو انتخاب کن
