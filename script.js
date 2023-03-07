function replaceKeywords() {
    const replacements = [
        document.getElementById("replacement1").value,
        document.getElementById("replacement2").value,
        document.getElementById("replacement3").value,
    ];
    const demoImages = [
    	document.getElementById("demo-image1").value,
    	document.getElementById("demo-image2").value,
    	document.getElementById("demo-image3").value,
    ];
    const template = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title>
</title>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css" data-inliner="ignore">
.mj-outlook-group-fix { width:100% !important; }
</style>
<![endif]-->
<!--[if !mso]><!--><!--<![endif]-->
<style>a:link {color:#bd6e41;font-weight:normal;text-decoration:underline;font-style:normal}
a:visited {color:#bd6e41;font-weight:normal;text-decoration:underline;font-style:normal}
a:active {color:#bd6e41;font-weight:normal;text-decoration:underline;font-style:normal}
a:hover {color:#bd6e41;font-weight:normal;text-decoration:underline;font-style:normal}</style><style>@import url(https://static-forms.klaviyo.com/fonts/api/v1/QhiEiQ/custom_fonts.css);
#outlook a {
padding: 0
}
body {
margin: 0;
padding: 0;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%
}
table, td {
border-collapse: collapse;
mso-table-lspace: 0;
mso-table-rspace: 0
}
img {
border: 0;
height: auto;
line-height: 100%;
outline: none;
text-decoration: none;
-ms-interpolation-mode: bicubic
}
p {
display: block;
margin: 13px 0
}
@media only screen and (min-width: 480px) {
.mj-column-per-100 {
width: 100% !important;
max-width: 100%
}
.mj-column-per-50 {
width: 50% !important;
max-width: 50%
}
}
@media only screen and (max-width: 480px) {
.hlb-wrapper .hlb-block-settings-content {
padding: 9px !important
}
.hlb-logo {
padding-bottom: 9px !important
}
.r2-tbl {
width: 100%
}
.r2-tbl .lnk {
width: 100%
}
.r2-tbl .hlb-subblk:last-child {
padding-right: 0 !important
}
.r2-tbl .hlb-subblk {
padding-right: 10px !important
}
.kl-hlb-stack {
display: block !important;
width: 100% !important;
padding-right: 0 !important
}
.kl-hlb-stack.vspc {
margin-bottom: 9px
}
.kl-hlb-wrap {
display: inline-block !important;
width: auto !important
}
.kl-hlb-no-wrap {
display: table-cell !important
}
.kl-hlb-wrap.nospc.nospc {
padding-right: 0 !important
}
}
@media only screen and (max-width: 480px) {
.component-wrapper .mob-no-spc {
padding-left: 0 !important;
padding-right: 0 !important
}
}
@media only screen and (max-width: 480px) {
.kl-text {
padding-right: 18px !important;
padding-left: 18px !important
}
}
@media only screen and (max-width: 480px) {
td.kl-img-base-auto-width {
width: 100% !important
}
}
@media screen and (max-width: 480px) {
.kl-sl-stk {
display: block !important;
width: 100% !important;
padding: 0 0 9px !important;
text-align: center !important
}
.kl-sl-stk.lbls {
padding: 0 !important
}
.kl-sl-stk.spcblk {
display: none !important
}
}
@media only screen and (max-width: 480px) {
td.mobile-only {
display: table-cell !important
}
div.mobile-only {
display: block !important
}
table.mobile-only {
display: table !important
}
.desktop-only {
display: none !important
}
}
@media only screen and (max-width: 480px) {
.table-mobile-only {
display: table-cell !important;
max-height: none !important
}
.table-mobile-only.block {
display: block !important
}
.table-mobile-only.inline-block {
display: inline-block !important
}
.table-desktop-only {
max-height: 0 !important;
display: none !important;
mso-hide: all !important;
overflow: hidden !important
}
}
@media only screen and (max-width: 480px) {
.kl-text div, .kl-table-subblock div, .kl-split-subblock div {
font-size: 14px !important;
line-height: 1.3 !important
}
}
@media only screen and (max-width: 480px) {
h1 {
font-size: 40px !important;
line-height: 1.1 !important
}
}
@media only screen and (max-width: 480px) {
h2 {
font-size: 32px !important;
line-height: 1.1 !important
}
}
@media only screen and (max-width: 480px) {
h3 {
font-size: 24px !important;
line-height: 1.1 !important
}
}
@media only screen and (max-width: 480px) {
h4 {
font-size: 18px !important;
line-height: 1.1 !important
}
}
@media only screen and (max-width: 480px) {
.root-container {
width: 100% !important
}
.root-container-spacing {
padding: 10px !important
}
.content-padding {
padding-left: 0 !important;
padding-right: 0 !important
}
.content-padding.first {
padding-top: 0 !important
}
.content-padding.last {
padding-bottom: 0 !important
}
.component-wrapper {
padding-left: 0 !important;
padding-right: 0 !important
}
}</style></head>
<body style="word-spacing:normal;background-color:#e9d5c4;">
<div class="root-container" id="bodyTable" style="background-position:left top; background-repeat:repeat; background-size:auto; background-color:#e9d5c4">
<div class="root-container-spacing" style="font-size:0; padding-bottom:20px; padding-top:50px">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section" role="presentation" style="width:100%;">
<tbody>
<tr>
<td>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section-outlook" style="width:650px;" width="650" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:650px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:650px;" width="650" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:36px 36px 36px 36px;max-width:650px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:36px 36px 36px 36px;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
<div class="content-padding first last" style="padding-left:0; padding-right:0; padding-top:0; padding-bottom:0">
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:650px;" width="650" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:650px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook" style="vertical-align:top;width:650px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;" vertical-align="middle">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper hlb-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="hlb-block-settings-content" style="background-color:#ffffff;vertical-align:top;padding-top:20px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="top" class="kl-header-link-bar" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:0;" width="100%">
<tbody>
<tr>
<td align="center" class="table-desktop-only hlb-logo" style="display:table-cell;width:100%;padding-bottom:10px;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<!--[if true]><td style="width:148px;" bgcolor="transparent"><![endif]-->
<!--[if !true]><!--><td style="width:148px;"><!--<![endif]-->
<a href="https://www.bythehorns.co.nz" style="color:#bd6e41; font-style:normal; font-weight:normal; text-decoration:underline" target="_blank">
<img alt="By the Horns" src="https://d3k81ch9hvuctc.cloudfront.net/company/QhiEiQ/images/21f140ab-178a-4569-98ac-cf9a410000c6.png" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; display:block; width:100%; background-color:transparent" width="148"/>
</a>
</td>
</tr>
</tbody>
</table>
</td>
<!--[if !true]><!--><td align="center" class="table-mobile-only hlb-logo" style="display:none; max-height:0; mso-hide:all; overflow:hidden; width:100%; padding-bottom:10px"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><!--[if true]><td style="width:100px;" bgcolor="transparent"><![endif]-->
<!--[if !true]><!--><td style="width:100px;"><!--<![endif]-->
<a href="https://www.bythehorns.co.nz" style="color:#bd6e41; font-style:normal; font-weight:normal; text-decoration:underline" target="_blank">
<img alt="By the Horns" src="https://d3k81ch9hvuctc.cloudfront.net/company/QhiEiQ/images/21f140ab-178a-4569-98ac-cf9a410000c6.png" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; display:block; width:100%; background-color:transparent" width="100"/>
</a>
</td>
</tr>
</tbody>
</table>
</td>
<!--<![endif]-->
</tr>
<tr>
<td>
<table align="center" cellpadding="0" cellspacing="0" class="r2-tbl" style="table-layout:fixed;" width="100%">
<tr style="text-align:center;">
<td align="center" class="kl-hlb-wrap inline-block hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="word-break:normal; border:none; border-radius:5px; cursor:auto; font-style:normal; mso-padding-alt:15px 0 15px 0; background:transparent" valign="middle">
<a href="https://www.bythehorns.co.nz" style="color:#232020; font-style:normal; font-weight:normal; text-decoration:none; display:inline-block; background:transparent; font-family:Helvetica, Arial; font-size:12px; line-height:100%; letter-spacing:1px; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
All Collections
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="table-desktop-only kl-hlb-wrap inline-block hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="#ffffff" role="presentation" style="word-break:normal; border:none; border-radius:5px; cursor:auto; font-style:normal; mso-padding-alt:15px 0 15px 0; background:#fff" valign="middle">
<a href="https://bythehorns.co.nz/collections/all/colour_black-white" style="color:#232020; font-style:normal; font-weight:normal; text-decoration:none; display:inline-block; background:#fff; font-family:Helvetica, Arial; font-size:12px; line-height:100%; letter-spacing:1px; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
Shop B/W Prints
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="table-desktop-only kl-hlb-wrap inline-block hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="#ffffff" role="presentation" style="word-break:normal; border:none; border-radius:5px; cursor:auto; font-style:normal; mso-padding-alt:15px 0 15px 0; background:#fff" valign="middle">
<a href="https://bythehorns.co.nz/collections/all/colour_full-colour" style="color:#232020; font-style:normal; font-weight:normal; text-decoration:none; display:inline-block; background:#fff; font-family:Helvetica, Arial; font-size:12px; line-height:100%; letter-spacing:1px; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
Shop Colour Prints
</a>
</td>
</tr>
</table>
</td>
<!--[if !true]><!--><td align="center" class="table-mobile-only kl-hlb-wrap inline-block hlb-subblk" style="display:none; max-height:0; mso-hide:all; overflow:hidden" valign="middle"><table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#ffffff" role="presentation" style="word-break:normal; border:none; border-radius:5px; cursor:auto; font-style:normal; mso-padding-alt:15px 0 15px 0; background:#fff" valign="middle"><a href="https://bythehorns.co.nz/collections/all/colour_black-white" style="color:#232020; font-style:normal; font-weight:normal; text-decoration:none; display:inline-block; background:#fff; font-family:Helvetica, Arial; font-size:12px; line-height:100%; letter-spacing:1px; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank"> Shop B&amp;W
</a></td></tr></table></td><!--<![endif]--><!--[if !true]><!--><td align="center" class="table-mobile-only kl-hlb-wrap inline-block hlb-subblk" style="display:none; max-height:0; mso-hide:all; overflow:hidden" valign="middle"><table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#ffffff" role="presentation" style="word-break:normal; border:none; border-radius:5px; cursor:auto; font-style:normal; mso-padding-alt:15px 0 15px 0; background:#fff" valign="middle"><a href="https://bythehorns.co.nz/collections/all/colour_full-colour" style="color:#232020; font-style:normal; font-weight:normal; text-decoration:none; display:inline-block; background:#fff; font-family:Helvetica, Arial; font-size:12px; line-height:100%; letter-spacing:1px; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank"> Shop Colour
</a></td></tr></table></td><!--<![endif]-->
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:650px;" width="650" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:650px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook" style="vertical-align:top;width:650px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:18px;padding-right:18px;padding-bottom:18px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
<p style="margin-bottom:0; margin-left:0; margin-right:0; margin-top:0; padding-bottom:0; border-top:solid 1px #ccc; font-size:1px; margin:0 auto; width:100%">
</p>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #cccccc;font-size:1px;margin:0px auto;width:614px;" role="presentation" width="614px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:solid 18px #FAF4E3;" width="100%">
<tbody>
<tr>
<td align="left" class="kl-text" style="background:#EA9D9D;font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
<div style="margin:0; font-family:Helvetica, Arial; font-size:14px; font-style:normal; font-weight:400; letter-spacing:0; line-height:1.5; text-align:left; color:#3f4245"><h6 style="text-align: center;"><span style="font-size: 36px; color: #f4f6f9;">Free </span></h6>
<h6 style="text-align: center;"><span style="font-size: 36px; color: #f4f6f9;">Phone Backgrounds</span></h6></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td align="center" style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="center" class="kl-image kl-image-2495288" style="font-size:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td class="kl-img-base-auto-width" style="width:606px;border:solid 22px #FAE8E3;padding:0px 0px 0px 0px;" valign="top">
<img src="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_1920,w_1080/v1678096970/wallpapers/${demoImages[0]}" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; display:block; width:100%; font-size:13px" width="606"/>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2532,w_1170/fl_attachment/v1678096970/wallpapers/${replacements[0]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 14/14 PRO + 13/13 PRO + 12/12 PRO
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2778,w_1284/fl_attachment/v1678096970/wallpapers/${replacements[0]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 14/13/12/11 PRO MAX + XS MAX
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_1792,w_828/fl_attachment/v1678096970/wallpapers/${replacements[0]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 11 + XR
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2436,w_1125/fl_attachment/v1678096970/wallpapers/${replacements[0]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE X + XS
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td align="center" style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="center" class="kl-image kl-image-2495289" style="font-size:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td class="kl-img-base-auto-width" style="width:606px;border:solid 22px #FAE8E3;padding:0px 0px 0px 0px;" valign="top">
<img src="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_1920,w_1080/v1678096970/wallpapers/${demoImages[1]}" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; display:block; width:100%; font-size:13px" width="606"/>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2532,w_1170/fl_attachment/v1678096970/wallpapers/${replacements[1]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 14/14 PRO + 13/13 PRO + 12/12 PRO
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2778,w_1284/fl_attachment/v1678096970/wallpapers/${replacements[1]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 14/13/12/11 PRO MAX + XS MAX
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_1792,w_828/fl_attachment/v1678096970/wallpapers/${replacements[1]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 11 + XR
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2436,w_1125/fl_attachment/v1678096970/wallpapers/${replacements[1]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE X + XS
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td align="center" style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="center" class="kl-image kl-image-2495290" style="font-size:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td class="kl-img-base-auto-width" style="width:606px;border:solid 22px #FAE8E3;padding:0px 0px 0px 0px;" valign="top">
<img src="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_1920,w_1080/v1678096970/wallpapers/${demoImages[2]}" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; display:block; width:100%; font-size:13px" width="606"/>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2532,w_1170/fl_attachment/v1678096970/wallpapers/${replacements[2]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 14/14 PRO + 13/13 PRO + 12/12 PRO
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2778,w_1284/fl_attachment/v1678096970/wallpapers/${replacements[2]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 14/13/12/11 PRO MAX + XS MAX
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_1792,w_828/fl_attachment/v1678096970/wallpapers/${replacements[2]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE 11 + XR
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-button" style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;line-height:100%;">
<tr>
<td align="center" bgcolor="#C77163" role="presentation" style="border:none;border-radius:5px;cursor:auto;mso-padding-alt:15px 0px 15px 0px;background:#C77163;" valign="middle">
<a href="https://res.cloudinary.com/dqzik191i/image/upload/c_fill,h_2436,w_1125/fl_attachment/v1678096970/wallpapers/${replacements[2]}" style="color:#FFF; font-style:normal; font-weight:700; text-decoration:none; display:block; background:#C77163; font-family:Arial; font-size:16px; line-height:100%; letter-spacing:0; margin:0; text-transform:none; padding:15px 0 15px 0; mso-padding-alt:0; border-radius:5px" target="_blank">
IPHONE X + XS
</a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:18px;padding-right:18px;padding-bottom:18px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
<p style="margin-bottom:0; margin-left:0; margin-right:0; margin-top:0; padding-bottom:0; border-top:solid 1px #CCC; font-size:1px; margin:0 auto; width:100%">
</p>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #CCCCCC;font-size:1px;margin:0px auto;width:614px;" role="presentation" width="614px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:650px;" width="650" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:650px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook" style="vertical-align:top;width:325px;" ><![endif]-->
<div class="mj-column-per-50 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper desktop-only" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div style="height:10px;line-height:10px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td><td class="kl-column-outlook" style="vertical-align:top;width:325px;" ><![endif]-->
<div class="mj-column-per-50 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper desktop-only" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div style="height:0px;line-height:0px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:650px;" width="650" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:650px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook" style="vertical-align:top;width:650px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td align="left" style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="background-color:#e9ceb8;vertical-align:top;padding-top:9px;padding-right:9px;padding-bottom:9px;padding-left:9px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-image kl-image-2495291" style="font-size:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td class="kl-img-base-auto-width" style="width:614px;border:0;padding:0px 9px 0px 9px;" valign="top">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr>
<td valign="top">
<img src="https://d3k81ch9hvuctc.cloudfront.net/company/QhiEiQ/images/3166ab61-c248-41aa-a500-07e6f4e2c1e1.png" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; display:block; width:100%; font-size:13px" width="614"/>
</td></tr></tbody></table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper kl-text-table-layout" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed" width="100%">
<tbody>
<tr>
<td class="" style="background-color:#f3dfcf;vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed" width="100%">
<tbody>
<tr>
<td align="center" class="kl-text" style="font-size:0px;padding:0px;padding-top:30px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
<div style="margin:0; font-family:Helvetica, Arial; font-size:14px; font-style:normal; font-weight:400; letter-spacing:0; line-height:1.5; text-align:center; color:#232020"><h4 style="color:#3f4245; font-family:Palatino Linotype, Palatino, Georgia; font-size:16px; font-style:normal; font-weight:bold; letter-spacing:1px; line-height:1.3; margin:0; margin-bottom:10px; text-align:center">Follow us</h4></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td align="center" style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="background-color:#f3dfcf;vertical-align:top;padding-top:10px;padding-right:0px;padding-bottom:20px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td>
<div style="width:100%;text-align:center">
<!--[if true]><table style="all:unset;opacity:0;" border="0" cellpadding="0" cellspacing="0" ><tr><![endif]-->
<!--[if !true]><!--><div class="" style="display:inline-block;padding-right:10px;"><!--<![endif]-->
<!--[if true]><td style="padding-right:10px;"><![endif]-->
<div style="text-align: center;">
<a href="https://www.facebook.com/ByTheHornsPrints" style="color:#bd6e41; font-style:normal; font-weight:normal; text-decoration:underline" target="_blank">
<img alt="Button Text" src="https://d3k81ch9hvuctc.cloudfront.net/company/QhiEiQ/images/d385f994-d8ab-425e-9eee-439dba1a7c3c.png" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; width:25" width="25"/>
</a>
</div>
<!--[if true]></td><![endif]-->
<!--[if !true]><!--></div><!--<![endif]-->
<!--[if !true]><!--><div class="" style="display:inline-block;padding-right:10px;"><!--<![endif]-->
<!--[if true]><td style="padding-right:10px;"><![endif]-->
<div style="text-align: center;">
<a href="https://www.instagram.com/by.the.horns/" style="color:#bd6e41; font-style:normal; font-weight:normal; text-decoration:underline" target="_blank">
<img alt="Custom" src="https://d3k81ch9hvuctc.cloudfront.net/company/QhiEiQ/images/7f4a9d3a-f8cb-4333-8427-15318a1ea57a.png" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; width:25" width="25"/>
</a>
</div>
<!--[if true]></td><![endif]-->
<!--[if !true]><!--></div><!--<![endif]-->
<!--[if !true]><!--><div class="" style="display:inline-block;"><!--<![endif]-->
<!--[if true]><td style=""><![endif]-->
<div style="text-align: center;">
<a href="https://nz.linkedin.com/in/amanda-king-9ab357154" style="color:#bd6e41; font-style:normal; font-weight:normal; text-decoration:underline" target="_blank">
<img alt="Custom" src="https://d3k81ch9hvuctc.cloudfront.net/company/QhiEiQ/images/2b7379fd-0b1b-4bfc-b0a0-03074002c508.png" style="border:0; height:auto; line-height:100%; max-width:100%; outline:none; text-decoration:none; width:25" width="25"/>
</a>
</div>
<!--[if true]></td><![endif]-->
<!--[if !true]><!--></div><!--<![endif]-->
<!--[if true]></tr></table><![endif]-->
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper kl-text-table-layout" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed" width="100%">
<tbody>
<tr>
<td class="" style="background-color:#faf9f9;vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed" width="100%">
<tbody>
<tr>
<td align="center" class="kl-text" style="font-size:0px;padding:0px;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;">
<div style="margin:0; font-family:Helvetica, Arial; font-size:12px; font-style:normal; font-weight:400; letter-spacing:0; line-height:1.5; text-align:center; color:#727272">No longer want to receive these emails? {% unsubscribe %}.<br/>
{{ organization.name }} {{ organization.full_address }}</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</div>
<!--[if mso | IE]></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
</div>
</body>
</html>`;
    const output = template
        .replace("content.png", replacements[0])
        .replace("content2.png", replacements[1])
        .replace("content3.png", replacements[2]);
    document.getElementById("output").value = output;
}

function copyOutput() {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Output copied to clipboard!");
}
