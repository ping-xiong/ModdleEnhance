# How to use
1. Upload to `ModdleDir/grade/report/overview`
2. Edit `index.php` on `ModdleDir/grade/report/overview`
3. add line `echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.2.0/jspdf.umd.min.js"></script>';` before `echo $OUTPUT->footer();`
4. add line `echo '<script src="https://unpkg.com/jspdf-autotable@3.5.13/dist/jspdf.plugin.autotable.js"></script>';` before `echo $OUTPUT->footer();`
4. add line `echo '<script src="./export.js"></script>';` before `echo $OUTPUT->footer();`