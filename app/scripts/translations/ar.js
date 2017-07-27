// Arabic
'use strict';
var ar = function() {}
ar.code = 'ar';
ar.data = {

/* New Generics */
x_CancelReplaceTx           : 'إلغاء العملية أو استبدالها',
x_CancelTx                  : 'إلغاء العملية',
x_PasswordDesc              : 'كلمة السر هذه * تشفر * المفتاح الخاص بك. ولكن هذا لا يعمل كبذور لتوليد المفاتيح الخاصة بك. ** سوف تحتاج إلى كلمة السر هذه بالاضافة الى المفتاح الخاص بك لفتح محفظتك. **',
x_ReadMore                  : 'قراءة المزيد',
x_ReplaceTx                 : 'استبدال العملية',
x_TransHash                 : 'مشفر العملية',
x_TXFee                     : 'رسوم العملية',
x_TxHash                    : 'مشفر العملية',

/* Check TX Status */
NAV_CheckTxStatus           : 'تحقق من حالة تكس',
NAV_TxStatus                : 'تكس الحالة',
tx_Details                  : 'تفاصيل الصفقه',
tx_Summary                  : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
tx_notFound                 : 'لم يتم العثور على المعاملة',
tx_notFound_1               : 'لا يمكن العثور على هذا تكس في تجمع تكس للعقدة التي تتصل بها',
tx_notFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
tx_notFound_3               : 'يمكن أن يكون لا يزال في تجمع تكس من عقدة مختلفة، في انتظار أن تكون الملغومة',
tx_notFound_4               : 'يرجى استخدام القائمة المنسدلة في أعلى اليسار وتحديد عقدة إيث مختلفة (مثل `إيث (Etherscan.io)` أو `إيث (Infura.io)` أو `إيث (ميثرواليت)`) والتحقق مرة أخرى',
tx_foundInPending           : 'تم العثور على المعاملة المعلقة',
tx_foundInPending_1         : 'كانت معاملتك موجودة في تجمع تكس للعقدة التي تتصل بها',
tx_foundInPending_2         : 'وهي معلقة حاليا (في انتظار أن تكون ملغومة)',
tx_foundInPending_3         : 'هناك فرصة يمكنك "إلغاء" أو استبدال هذه المعاملة. افتح محفظتك أدناه',
tx_FoundOnChain             : 'تم العثور على المعاملة',
tx_FoundOnChain_1           : 'تم إنهاء معاملتك بنجاح وهو على بلوكشين',
tx_FoundOnChain_2           : '** إذا رأيت أحمر `(!)`، رسالة خطأ "باد إنستروكشيون" أو `أوت أوف GAS` **، فهذا يعني أن المعاملة لم يتم إرسالها بنجاح *. لا يمكنك إلغاء هذه المعاملة أو استبدالها. بدلا من ذلك، أرسل معاملة جديدة. إذا تلقيت خطأ "خارج الغاز"، يجب مضاعفة الحد الأقصى للغاز الذي حددته في الأصل',
tx_FoundOnChain_3           : '** إذا كنت لا ترى أي أخطاء، تم إرسال المعاملة بنجاح. ** إيث أو توكينز هي المكان الذي أرسلت لهم. إذا لم تتمكن من رؤية هذا إيث أو توكينز المودعة في حسابك المحفظة / الصرف الأخرى، وكان 24+ ساعات منذ إرسالها، يرجى [الاتصال بتلك الخدمة] (https://myetherwallet.groovehq.com/knowledge_base/topics/i -have واحد في السؤال، ولكن والخمسين لا للحوالي myetherwallet دوت كوم-ما-دو-ط-دو). أرسل لهم * رابط * لمعاملتك ونطلب منهم، لطيف، للنظر في الوضع الخاص بك',

/* Gen Wallet Updates */
GEN_Help_1                  : 'استخدام الخاص بك',
GEN_Help_2                  : 'للدخول إلى حسابك',
GEN_Help_3                  : 'جهازك * هو * محفظتك',
GEN_Help_4                  : 'أدلة & أسئلة وأجوبة',
GEN_Help_5                  : 'كيفية إنشاء محفظة',
GEN_Help_6                  : 'ابدء',
GEN_Help_7                  : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                  : 'عدم تنزيل ملف؟ ',
GEN_Help_9                  : 'جرب استخدام غوغل كروم ',
GEN_Help_10                 : 'انقر بزر الماوس الأيمن على الملف وحفظه. اسم الملف ',
GEN_Help_11                 : 'لا تفتح هذا الملف على جهاز الكمبيوتر ',
GEN_Help_12                 : 'استخدامه لفتح المحفظة الخاصة بك عن طريق ميثرواليت (أو ضباب، جيث، التكافؤ وغيرها من عملاء المحفظة.) ',
GEN_Help_13                 : 'كيفية عمل نسخة احتياطية ملف كيستور الخاص بك ',
GEN_Help_14                 : 'ما هي هذه الأشكال المختلفة؟ ',
GEN_Help_15                 : 'منع الخسارة & أمب؛ سرقة الأموال الخاصة بك',
GEN_Help_16                 : 'ما هي هذه الأشكال المختلفة؟',
GEN_Help_17                 : 'لماذا يجب علي؟',
GEN_Help_18                 : 'الحصول على نسخة احتياطية ثانوية',
GEN_Help_19                 : 'في حال نسيان كلمة المرور',
GEN_Help_20                 : 'التخزين البارد',
GET_ConfButton              : 'أفهم. استمر',
GEN_Label_5                 : 'حفظ `المفتاح الخاص` ',
GEN_Unlock                  : 'افتح محفظتك لمشاهدة عنوانك',
GAS_PRICE_Desc              : 'الغاز السعر هو المبلغ الذي تدفعه لكل وحدة من الغاز. `رسوم تكس = سعر الغاز * الغاز LIM` ويدفع إلى عمال المناجم ل تشمل تكس الخاص بك في كتلة. ارتفاع سعر الغاز = أسرع المعاملات، ولكن أكثر تكلفة. الافتراضي هو `21 GWEI`',
GAS_LIMIT_Desc              : 'الحد من الغاز هو كمية الغاز لإرسال مع تكس الخاص بك. `TX fee` = سعر الغاز * الحد من الغاز وتدفع إلى عمال المناجم بما في ذلك تكس الخاص بك في كتلة. زيادة هذا العدد لن تحصل تكس الخاص بك الملغومة بشكل أسرع. إرسال إيث = `21000`. إرسال توكينز = ~ `200000`',
NONCE_Desc                  : 'و نونس هو عدد المعاملات المرسلة من عنوان معين. فإنه يضمن يتم إرسال المعاملات في النظام وليس أكثر من مرة',
TXFEE_Desc                  : 'يتم دفع رسوم تكس إلى عمال المناجم لتضمين تكس في كتلة. هو "الغاز الحد```` سعر الغاز`. [يمكنك تحويل غوي -> إيث هنا] (https://www.myetherwallet.com/helpers.html) '،


/* Navigation*/
NAV_AddWallet               : 'إضافة محفظة ',
NAV_BulkGenerate            : 'انشيء بالجملة ',
NAV_Contact                 : 'اتصال ',
NAV_Contracts               : 'عقود ',
NAV_DeployContract          : 'نشر عقد ',
NAV_ENS                     : 'لنطاقات ',
NAV_GenerateWallet_alt      : 'محفظة جديدة ',
NAV_GenerateWallet          : 'إنشاء محفظة جديدة ',
NAV_Help                    : 'مساعدة ',
NAV_InteractContract        : 'التفاعل مع العقد ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'محافظي ',
NAV_Offline                 : 'أرسل دون إتصال ',
NAV_SendEther               : 'أرسل الأثير والرموز ',
NAV_SendTokens              : 'أرسل الرموز  ',
NAV_SignMsg                 : 'وقع الرسالة ',
NAV_Swap                    : 'استبدل ',
NAV_ViewWallet              : 'عرض معلومات المحفظة ',
NAV_YourWallets             : 'محافظك ',

/* General */
x_Access                    : 'التمكن من ',
x_AddessDesc                : 'يمكن أن يعرف عنوانك أيضا باسم `الحساب #` أو` المفتاح العام`. هو ما كنت تشارك مع الناس حتى يتمكنوا من إرسال لك الأثير أو الرموز. ابحث عن رمز العنوان الملون. تأكد من أنه يطابق محفظتك الورقية وكلما قمت بإدخال عنوانك في مكان ما ',
x_Address                   : 'عنوانك ',
x_Cancel                    : 'إلغاء ',
x_CSV                       : 'ملف كسف (غير مشفر) ',
x_Download                  : 'تحميل ',
x_Json                      : 'ملف جسون (غير مشفر) ',
x_JsonDesc                  : 'هذا هو تنسيق جسون غير المشفر الخاص بك. وهذا يعني أنك لا تحتاج إلى كلمة المرور ولكن أي شخص يجد جسون الخاص بك يمكن الوصول إلى محفظتك والأثير دون كلمة المرور ',
x_Keystore                  : 'ملف كيستور (أوتك / جسون · موصى به · مشفرة) ',
x_Keystore2                 : 'ملف كيستور (أوتك / جسون) ',
x_KeystoreDesc              : 'هذا الملف كيستور يطابق الشكل المستخدم من قبل ميست بحيث يمكنك بسهولة استيراده في المستقبل. هذا هو الملف الموصى به للتحميل والنسخ الاحتياطي',
x_Mnemonic                  : 'منيمونيك العبارة ',
x_ParityPhrase              : 'عبارة التكافؤ ',
x_Password                  : 'كلمه السر ',
x_Print                     : 'طباعة المحفظة الورقية ',
x_PrintDesc                 : 'بروتيب: انقر على طباعة وحفظ هذا كملف بدف، حتى إذا لم تكن تملك طابعة! ',
x_PrintShort                : 'طباعة ',
x_PrivKey                   : 'مفتاح خاص (غير مشفر) ',
x_PrivKey2                  : 'مفتاح سري ',
x_PrivKeyDesc               : 'هذه هي النسخة النصية غير المشفرة من المفتاح الخاص بك، وهذا يعني لا كلمة السر ضرورية. إذا كان شخص ما للعثور على المفتاح الخاص غير مشفرة، فإنها يمكن الوصول إلى محفظتك دون كلمة مرور. لهذا السبب، يوصى عادة بالإصدارات المشفرة ',
x_Save                      : 'حفظ ',
x_TXT                       : 'ملف تكست (غير مشفر) ',
x_Wallet                    : 'محفظة نقود ',

/* Header */
CX_Tagline                  : 'أوثر سورس جافاسكريبت كلينت-سيد سيد إيثر واليت كروم إكستنسيون ',
CX_Warning_1                : 'تأكد من أن لديك ** النسخ الاحتياطي الخارجي ** من أي محافظ قمت بتخزين هنا. قد تحدث أشياء كثيرة قد تؤدي إلى فقدان البيانات في إضافة كروم هذه، بما في ذلك إزالة الإضافة وإعادة تثبيتها. هذا التمديد هو وسيلة للوصول بسهولة محافظك، ** لا ** وسيلة لنسخها احتياطيا'،
MEW_Tagline                 : 'مفتوحة المصدر جافاسكريبت العميل الجانب المحفظة الأثير ',
MEW_Warning_1               : 'تحقق دائما من عنوان ورل قبل الدخول إلى محفظتك أو إنشاء محفظة جديدة. حذار من مواقع التصيد! ',

/* Footer */
FOOTER_1                    : 'مجانا، مفتوحة المصدر، واجهة العميل لتوليد إثريوم محافظ & أمب؛ أكثر من. التفاعل مع بلوكشين إثريوم بسهولة & أمب؛ بشكل آمن. تحقق مرة أخرى من عنوان ورل (.com) قبل إلغاء قفل محفظتك.',
FOOTER_1b                   : 'صنع من قبل ',
FOOTER_2                    : 'التبرعات موضع تقدير كبير ',
FOOTER_3                    : 'العميل المحفظة جيل من قبل ',
FOOTER_4                    : 'تنصل ',

/* Sidebar */
sidebar_AccountInfo         : 'معلومات الحساب ',
sidebar_AccountAddr         : 'عنوان الحساب ',
sidebar_AccountBal          : 'رصيد الحساب ',
sidebar_TokenBal            : 'أرصدة الرمز المميز ',
sidebar_Equiv               : 'القيم المكافئة ',
sidebar_TransHistory        : 'تاريخ المعاملة ',
sidebar_donation            : 'ميثرواليت هي خدمة مجانية مفتوحة المصدر مخصصة لخصوصيتك وأمنك. والمزيد من التبرعات التي نتلقاها، والمزيد من الوقت ننفق خلق ميزات جديدة، والاستماع إلى ملاحظاتك، وتعطيك ما تريد. نحن شخصين فقط يحاولان تغيير العالم. ساعدنا؟ '،
sidebar_donate              : 'تبرع ',
sidebar_thanks              : 'شكرا!!! ',

/* Decrypt Panel */
decrypt_Access              : 'كيف تريد الوصول إلى محفظتك؟ ',
decrypt_Title               : 'حدد تنسيق المفتاح الخاص ',
decrypt_Select              : 'حدد محفظة ',

/* Mnemonic */
MNEM_1                      : 'يرجى تحديد العنوان الذي ترغب في التفاعل معه. ',
MNEM_2                      : 'الخاص بك واحد عبارة هد منيم يمكن الوصول إلى عدد من محافظ / عناوين. يرجى تحديد العنوان الذي ترغب في التفاعل معه في الوقت الحالي. ',
MNEM_more                   : 'المزيد من العناوين ',
MNEM_prev                   : 'العناوين السابقة ',

/* Hardware wallets */
x_Ledger                    : 'ليدجر نانو S ',
ADD_Ledger_1                : 'قم بتوصيل دفتر الأستاذ نانو S ',
ADD_Ledger_2                : 'افتح تطبيق إثريوم (أو تطبيق العقد) ',
ADD_Ledger_3                : 'تحقق من تمكين دعم المتصفح في الإعدادات ',
ADD_Ledger_4                : 'إذا لم يتم العثور على دعم المتصفح في الإعدادات، تحقق من أن لديك [فيرموار> 1.2] (https://www.ledgerwallet.com/apps/manager) ',إذا لم يتم العثور على دعم المتصفح في الإعدادات، تحقق من أن لديك [فيرموار> 1.2] (https://www.ledgerwallet.com/apps/manager)... ',
ADD_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
ADD_Ledger_0b               : 'أعد فتح ميثرواليت باستخدام [كروم] (https://www.google.com/chrome/browser/desktop/) أو [أوبيرا] (https://www.opera.com/) ',
ADD_Ledger_scan             : 'الاتصال ليدجر نانو S ',
x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'الاتصال ب تريزور ',

/* Add Wallet */
ADD_Label_1                 : 'ماذا تريد ان تفعل؟ ',
ADD_Radio_1                 : 'إنشاء محفظة جديدة ',
ADD_Radio_2                 : 'حدد ملف المحفظة (كيستور / جسون) ',
ADD_Radio_2_alt             : 'حدد ملف المحفظة ',
ADD_Radio_2_short           : '...حدد ملف المحفظة ',
ADD_Radio_3                 : 'لصق / اكتب المفتاح الخاص ',
ADD_Radio_4                 : 'أضف حسابا للمشاهدة ',
ADD_Radio_5                 : 'لصق / نوع الخاص بك ذاكري ',
ADD_Radio_5_Path            : 'حدد مسار اشتقاق هد ',
ADD_Radio_5_woTrezor        : '(جاكس، ميتاماسك، إكسودوس، إمتوكين)',
ADD_Radio_5_withTrezor      : '(جاكس، ميتاماسك، إكسودوس، إمتوكين، تريزور)',
ADD_Radio_5_PathAlternative : '(موازنه)',
ADD_Radio_5_PathTrezor      : ' (تريزور)',
ADD_Radio_5_PathCustom      : 'العادة',
ADD_Label_2                 : 'إنشاء اسم مستعار ',
ADD_Label_3                 : 'يتم تشفير محفظتك. الرجاء إدخال كلمة المرور ',
ADD_Label_4                 : 'أضف حسابا للمشاهدة ',
ADD_Warning_1               : 'يمكنك إضافة أي حساب إلى "مشاهدة" على علامة التبويب محافظ دون تحميل مفتاح خاص. هذا لا ** لا ** يعني لديك حق الوصول إلى هذه المحفظة، ولا يمكنك نقل الأثير منه',
ADD_Label_5                 : 'أدخل العنوان ',
ADD_Label_6                 : 'افتح المحفظة ',
ADD_Label_6_short           : 'حفظة ',
ADD_Label_7                 : 'إضافة حساب ',
ADD_Label_8                 : ':كلمة المرور (اختياري)  ',

/* My Wallet */
MYWAL_Nick                  : 'اسم المحفظة ',
MYWAL_Address               : 'عنوان المحفظة ',
MYWAL_Bal                   : 'رصيد حساب ',
MYWAL_Edit                  : 'تصحيح ',
MYWAL_View                  : 'رأي ',
MYWAL_Remove                : 'إزالة ',
MYWAL_RemoveWal             : 'إزالة المحفظة ',
MYWAL_WatchOnly             : 'حسابات المشاهدة فقط ',
MYWAL_Viewing               : 'عرض المحفظة ',
MYWAL_Hide                  : 'إخفاء معلومات المحفظة ',
MYWAL_Edit_2                : 'تعديل المحفظة ',
MYWAL_Name                  : 'اسم المحفظة ',
MYWAL_Content_1             : 'تحذير! أنت على وشك إزالة محفظتك ',
MYWAL_Content_2             : 'تأكد من حفظ ** المفتاح الخاص و / أو ملف كيستور وكلمة المرور ** قبل إزالته. ',
MYWAL_Content_3             : ' If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add it using the private key/JSON and password.',

/* Generate Wallets */
GEN_desc                    : 'إذا كنت ترغب في إنشاء محافظ متعددة، يمكنك القيام بذلك هنا ',
GEN_Label_1                 : 'أدخل كلمة مرور',
GEN_Placeholder_1           : 'لا ننسى لانقاذ هذا! ',
GEN_SuccessMsg              : 'نجاح! تم إنشاء محفظتك. ',
GEN_Label_2                 : 'احفظ ملف `Keyystore`',
GEN_Label_3                 : 'حفظ عنوانك',
GEN_Label_4                 : 'طباعة المحفظة ورقة أو رمز الاستجابة السريعة',

/* Bulk Generate Wallets */
BULK_Label_1                : 'عدد من محافظ لتوليد ',
BULK_Label_2                : 'إنشاء محافظ ',
BULK_SuccessMsg             : 'نجاح! تم إنشاء محافظك ',

/* Sending Ether and Tokens */
SEND_addr                   : 'إلى عنوان ',
SEND_amount                 : 'المبلغ المطلوب الإرسال ',
SEND_amount_short           : 'كمية ',
SEND_custom                 : 'إضافة رمز مميز ',
SEND_gas                    : 'غاز ',
SEND_TransferTotal          : 'إرسال الرصيد الكامل ',
SEND_generate               : 'إنشاء المعاملة ',
SEND_raw                    : 'المعاملة الخام ',
SEND_signed                 : 'المعاملات الموقعة ',
SEND_trans                  : 'إرسال المعاملة ',
SENDModal_Title             : 'تحذير! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'أنت على وشك الإرسال ',
SENDModal_Content_2         : 'إلى عنوان ',
SENDModal_Content_3         : 'هل انت متأكد من أنك تريد أن تفعل هذا؟ ',
SENDModal_Content_4         : 'ملاحظة: إذا واجهت خطأ، تحتاج على الأرجح لإضافة الأثير إلى حسابك لتغطية تكلفة الغاز من إرسال الرموز المميزة. يتم دفع الغاز في الأثير ',
SENDModal_No                : 'لا، أحصل علي من هنا! ',
SENDModal_Yes               : 'نعم أنا متأكد! إجراء المعاملة ',

/* Tokens */
TOKEN_Addr                  : 'عنوان ',
TOKEN_Symbol                : 'رمز الرمز المميز ',
TOKEN_Dec                   : 'الكسور العشرية ',
TOKEN_show                  : 'عرض جميع الرموز المميزة ',
TOKEN_hide                  : 'إخفاء الرموز ',

/* Send Transaction */
TRANS_desc                  : 'إذا كنت تريد إرسال الرموز المميزة، فالرجاء استخدام صفحة "إرسال الرمز المميز" بدلا من ذلك ',
TRANS_advanced              : '+ متقدم: إضافة البيانات ',
TRANS_data                  : 'البيانات ',
TRANS_gas                   : 'الحد من الغاز ',
TRANS_sendInfo              : 'والمعاملة القياسية باستخدام 21000 الغاز تكلف 0.000441 إيث. نحن نستخدم قليلا-- فوق-- الحد الأدنى من سعر الغاز 0.000000021 إيث لضمان الحصول على الملغومة بسرعة. نحن لا تأخذ رسوم المعاملات ',

/* Offline Transaction */
OFFLINE_Title               : 'إنشاء وإرسال غير متصل المعاملة ',
OFFLINE_Desc                : 'توليد المعاملات حاليا يمكن أن يتم في ثلاث خطوات. سوف تقوم بإكمال الخطوات 1 و 3 على جهاز كمبيوتر على الإنترنت، والخطوة 2 على جهاز كمبيوتر متصل / إيرغابد. وهذا يضمن مفاتيحك الخاصة لا تلمس جهاز متصل بالإنترنت',
OFFLLINE_Step1_Title        : 'الخطوة 1: توليد المعلومات (الكمبيوتر عبر الإنترنت) ',
OFFLINE_Step1_Button        : 'توليد المعلومات ',
OFFLINE_Step1_Label_1       : 'من العنوان ',
OFFLINE_Step1_Label_2       : 'ملاحظة: هذا هو عنوان فروم، وليس عنوان تو. يتم إنشاء نونس من الحساب المنشأ. إذا كنت تستخدم جهاز كمبيوتر متقطع، فسيكون عنوان حساب التخزين البارد ',
OFFLINE_Step2_Title         : 'الخطوة 2: إنشاء المعاملات (غير متصل الكمبيوتر) ',
OFFLINE_Step2_Label_1       : 'To Address ',
OFFLINE_Step2_Label_2       : 'القيمة / المبلغ المرسل ',
OFFLINE_Step2_Label_3       : 'سعر الغاز ',
OFFLINE_Step2_Label_3b      : 'تم عرض هذا في الخطوة 1 على جهاز الكمبيوتر الخاص بك على الانترنت ',
OFFLINE_Step2_Label_4       : 'الحد من الغاز ',
OFFLINE_Step2_Label_4b      : '21000 هو الحد الافتراضي للغاز. عند إرسال عقود أو إضافة بيانات، قد يكون هذا مختلفا. سيتم إرجاع أي غاز غير المستخدمة لك ',
OFFLINE_Step2_Label_5       : 'مناسبة حالية ',
OFFLINE_Step2_Label_5b      : 'تم عرض هذا في الخطوة 1 على جهاز الكمبيوتر الخاص بك على الانترنت ',
OFFLINE_Step2_Label_6       : 'البيانات ',
OFFLINE_Step2_Label_6b      : 'هذا اختياري. وغالبا ما تستخدم البيانات عند إرسال المعاملات إلى العقود ',
OFFLINE_Step2_Label_7       : 'أدخل / حدد المفتاح الخاص / جسون. ',
OFFLINE_Step3_Title         : 'الخطوة 3: إرسال / نشر المعاملة (الكمبيوتر عبر الإنترنت) ',
OFFLINE_Step3_Label_1       : 'الصق المعاملة التي تم توقيعها من الخطوة 2 هنا واضغط على زر "إرسال المعاملات" ',

/* Contracts */
CONTRACT_Title              : 'عنوان العقد ',
CONTRACT_Title_2            : 'حدد العقد الحالي ',
CONTRACT_Json               : 'واجهة أبي / جسون ',
CONTRACT_Interact_Title     : 'قراءة / كتابة العقد ',
CONTRACT_Interact_CTA       : 'حدد دالة ',
CONTRACT_ByteCode           : 'بايت كود ',
CONTRACT_Read               : 'اقرأ ',
CONTRACT_Write              : 'اكتب ',
DEP_generate                : 'إنشاء بيتيكود ',
DEP_generated               : 'بيتيكود التي تم إنشاؤها ',
DEP_signtx                  : 'توقيع المعاملة ',
DEP_interface               : 'واجهة ولدت ',

/* Node Switcher */
NODE_Title                  : 'إعداد العقدة المخصصة',
NODE_Subtitle               : 'للاتصال بعقدة محلية ...',
NODE_Warning                : 'يجب أن تكون العقدة هتبس من أجل الاتصال بها عبر MyEtherWallet.com. يمكنك [تحميل ريبو ميثرواليت وتشغيله محليا] (https://github.com/kvhnuke/etherwallet/releases/latest) للاتصال بأي عقدة. أو الحصول على شهادة سل مجانية عبر [ليتسنكريبت] (https://letsencrypt.org/)',
NODE_Name                   : 'اسم العقدة',
NODE_Port                   : 'منفذ العقدة',
NODE_CTA                    : 'حفظ واستخدام العقدة المخصصة',


/* Swap / Exchange */
SWAP_rates                  : "التصنيفات الحالية ",
SWAP_init_1                 : "أريد أن مبادلة بلدي ",
SWAP_init_2                 : " ل "، //" أريد أن مبادلة بلدي X إيث ل X بتك"
SWAP_init_CTA               : "هيا بنا نقوم بذلك! "، // أو" متابعة"
SWAP_information            : "معلوماتك ",
SWAP_send_amt               : "المبلغ المطلوب إرساله",
SWAP_rec_amt                : "المبلغ المستلم ",
SWAP_your_rate              : "معدلك ",
SWAP_rec_add                : "عنوان الاستلام ",
SWAP_start_CTA              : "بدء مبادلة ",
SWAP_ref_num                : "رقمك المرجعي ",
SWAP_time                   : "الوقت المتبقي لإرساله ",
SWAP_progress_1             : "تم بدء الطلب ",
SWAP_progress_2             : "في انتظار الخاص بك "، // في انتظار بك بتك ...
SWAP_progress_3             : "تم الاستلام! "، // إيث ريسيفد!
SWAP_progress_4             : "جار إرسال {{orderResult.output.currency}} ",
SWAP_progress_5             : "الطلب جاهز ",
SWAP_order_CTA              : "الرجاء ارسال "، // الرجاء ارسال 1 إيث ...
SWAP_unlock                 : "افتح محفظتك لإرسال إيث أو توكينز مباشرة من هذه الصفحة ",

* Sign Message */
MSG_message                 : 'رسالة ',
MSG_date                    : 'تاريخ ',
MSG_signature               : 'التوقيع ',
MSG_verify                  : 'تحقق من الرسالة ',
MSG_info1                   : 'قم بتضمين التاريخ الحالي بحيث لا يمكن إعادة استخدام التوقيع في تاريخ مختلف. ',
MSG_info2                   : 'قم بتضمين لقبك وأين تستخدم اللقب حتى لا يستطيع شخص آخر استخدامه. ',
MSG_info3                   : 'قم بتضمين لقبك وأين تستخدم اللقب حتى لا يستطيع شخص آخر استخدامه. ',


/* View Wallet Details */
VIEWWALLET_Subtitle         : 'This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'This allows you to download different versions of private keys and re-print your paper wallet. ',
VIEWWALLET_SuccessMsg       : 'Success! Here are your wallet details. ',
VIEWWALLET_ShowPrivKey      : '(show)',
VIEWWALLET_HidePrivKey      : '(hide)',

/* Chrome Extension */
CX_error_1                  : 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! ',
CX_quicksend                : 'QuickSend ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Please enter a valid amount.', // 0
ERROR_1                     : 'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
ERROR_2                     : 'Sorry! We don\'t recognize this type of wallet file. ', // 2
ERROR_3                     : 'This is not a valid wallet file. ', // 3
ERROR_4                     : 'This unit doesn\'t exists, please use the one of the following units ', // 4
ERROR_5                     : 'Please enter a valid address. ', // 5
ERROR_6                     : 'Please enter a valid password. ', // 6
ERROR_7                     : 'Please enter valid decimals     (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Please enter a valid gas limit  (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Please enter a valid data value (Must be hex.) ', // 9
ERROR_10                    : 'Please enter a valid gas price. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Please enter a valid nonce      (Must be integer.) ', // 11
ERROR_12                    : 'Invalid signed transaction. ', // 12
ERROR_13                    : 'A wallet with this nickname already exists. ', // 13
ERROR_14                    : 'Wallet not found. ', // 14
ERROR_15                    : 'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
ERROR_16                    : 'A wallet with this address already exists in storage. Please check your wallets page. ', // 16
ERROR_17                    : 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
ERROR_18                    : 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                    : 'Please enter a valid symbol', // 19
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : 'You need this `Keystore File + Password` or the `Private Key` (next page) to access this wallet in the future.  ', // 28
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
ERROR_36                    : 'Enter valid TX hash', // 36
ERROR_37                    : 'Enter valid hex string (0-9, a-f)', // 37

SUCCESS_1                   : 'Valid address ',
SUCCESS_2                   : 'Wallet successfully decrypted ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:  ',
SUCCESS_4                   : 'Your wallet was successfully added ',
SUCCESS_5                   : 'File Selected ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_Send_Link              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Invalid sender ',
GETH_Nonce                  : 'Nonce too low ',
GETH_Cheap                  : 'Gas price too low for acceptance ',
GETH_Balance                : 'Insufficient balance ',
GETH_NonExistentAccount     : 'Account does not exist or account balance too low ',
GETH_InsufficientFunds      : 'Insufficient funds for gas * price + value ',
GETH_IntrinsicGas           : 'Intrinsic gas too low ',
GETH_GasLimit               : 'Exceeds block gas limit ',
GETH_NegativeValue          : 'Negative value ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transaction with the same hash was already imported.",
PARITY_Old                  : "Transaction nonce is too low. Try incrementing the nonce.",
PARITY_TooCheapToReplace    : "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",
PARITY_LimitReached         : "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
PARITY_InsufficientGasPrice : "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

/* Tranlsation Info */
translate_version           : '0.5 ',
Translator_Desc             : 'نشكر من قام بالترجمة ',
TranslatorName_1            : '[bstashio](https://www.myetherwallet.com/?gaslimit=21000&to=0xD8FE791535Ad85D2b0E76e603443C1b39107729F&value=1.0#send-transaction) · ',
TranslatorAddr_1            : '0xD8FE791535Ad85D2b0E76e603443C1b39107729F ',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : ' ',
TranslatorAddr_2            : ' ',
/* Translator 2             : Insert Comments Here */
TranslatorName_3            : ' ',
TranslatorAddr_3            : ' ',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : ' ',
TranslatorAddr_4            : ' ',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : ' ',
TranslatorAddr_5            : ' ',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. ',
HELP_Desc                   : 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! ',
HELP_Remind_Title           : 'Some reminders ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. ',
HELP_Remind_Desc_3          : 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! ',

HELP_0_Title                : '0) I\'m new. What do I do? ',
HELP_0_Desc_1               : 'MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**. ',
HELP_0_Desc_2               : 'Create a new wallet. ',
HELP_0_Desc_3               : 'Back the wallet up. ',
HELP_0_Desc_4               : 'Verify you have access to this new wallet and have correctly saved all necessary information. ',
HELP_0_Desc_5               : 'Transfer Ether to this new wallet. ',

HELP_1_Title                : '1) How do I create a new wallet? ',
HELP_1_Desc_1               : 'Go to the "Generate Wallet" page. ',
HELP_1_Desc_2               : 'Go to the "Add Wallet" page & select "Generate New Wallet" ',
HELP_1_Desc_3               : 'Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. ',
HELP_1_Desc_4               : 'Click "GENERATE". ',
HELP_1_Desc_5               : 'Your wallet has now been generated. ',

HELP_2a_Title               : 'How do I save/backup my wallet? ',
HELP_2a_Desc_1              : 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. ',
HELP_2a_Desc_2              : 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. ',
HELP_2a_Desc_3              : 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys ',
HELP_2a_Desc_4              : 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. ',
HELP_2a_Desc_5              : 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. ',
HELP_2a_Desc_6              : 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). ',

HELP_2b_Title               : '2b) How do I safely / offline / cold storage with MyEtherWallet? ',
HELP_2b_Desc_1              : 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Click on `dist-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Move zip to an airgapped computer. ',
HELP_2b_Desc_4              : 'Unzip it and double-click `index.html`. ',
HELP_2b_Desc_5              : 'Generate a wallet with a strong password. ',
HELP_2b_Desc_6              : 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. ',
HELP_2b_Desc_7              : 'Store these papers / USBs in multiple physically separate locations. ',
HELP_2b_Desc_8              : 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. ',

HELP_3_Title                : '3) How do I verify I have access to my new wallet? ',
HELP_3_Desc_1               : '**Before you send any Ether to your new wallet**, you should ensure you have access to it. ',
HELP_3_Desc_2               : 'Navigate to the "View Wallet Info" page. ',
HELP_3_Desc_3               : 'Navigate to the MyEtherWallet.com "View Wallet Info" page. ',
HELP_3_Desc_4               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_3_Desc_5               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_3_Desc_6               : 'Click the "Unlock Wallet" button. ',
HELP_3_Desc_7               : 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ',
HELP_3_Desc_8               : 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ',

HELP_4_Title                : '4) How do I send Ether from one wallet to another? ',
HELP_4_Desc_1               : 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. ',
HELP_4_Desc_2               : 'Navigate to the "Send Ether & Tokens" page. ',
HELP_4_Desc_3               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_4_Desc_4               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_4_Desc_5               : 'Click the "Unlock Wallet" button. ',
HELP_4_Desc_6               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4_Desc_7               : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4_Desc_9               : 'Click "Generate Transaction". ',
HELP_4_Desc_10              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_4_Desc_11              : 'Click the blue "Send Transaction" button below that. ',
HELP_4_Desc_12              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_4_Desc_13              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ',

HELP_4CX_Title              : '4) How do I send Ether using MyEtherWallet CX? ',
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send Ether & Tokens" page. ',
HELP_4CX_Desc_2             : 'QuickSend ',
HELP_4CX_Desc_3             : 'Click the Chrome Extension Icon. ',
HELP_4CX_Desc_4             : 'Click the "QuickSend" button. ',
HELP_4CX_Desc_5             : 'Select the wallet you wish to send from. ',
HELP_4CX_Desc_6             : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4CX_Desc_7             : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4CX_Desc_8             : 'Click "Send Transaction". ',
HELP_4CX_Desc_9             : 'Verify the address and the amount you are sending is correct. ',
HELP_4CX_Desc_10            : 'Enter the password for that wallet. ',
HELP_4CX_Desc_11            : 'Click "Send Transaction." ',
HELP_4CX_Desc_12            : 'Using "Send Ether & Tokens" Page ',

HELP_5_Title                : '5) How do I run MyEtherWallet.com offline/locally? ',
HELP_5_Desc_1               : 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. ',
HELP_5_Desc_7               : 'MyEtherWallet.com is now running entirely on your computer. ',
HELP_5_Desc_8               : 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. ',
HELP_5_Desc_9               : 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. ',

HELP_5CX_Title              : '5) How can I install this extension from the repo instead of the Chrome Store? ',
HELP_5CX_Desc_2             : 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ',
HELP_5CX_Desc_3             : 'Go to Google Chrome and find you settings (in the menu in the upper right). ',
HELP_5CX_Desc_4             : 'Click "Extensions" on the left. ',
HELP_5CX_Desc_5             : 'Check the "Developer Mode" button at the top of that page. ',
HELP_5CX_Desc_6             : 'Click the "Load unpacked extension..." button. ',
HELP_5CX_Desc_7             : 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
HELP_5CX_Desc_8             : 'The extension should now show up in your extensions and in your Chrome Extension bar. ',

HELP_7_Title                : '7) How do I send tokens & add custom tokens? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
HELP_7_Desc_1               : 'Navigate to the "Send Ether & Tokens" page. ',
HELP_7_Desc_2               : 'Unlock your wallet. ',
HELP_7_Desc_3               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_7_Desc_4               : 'Enter the amount you would like to send. ',
HELP_7_Desc_5               : 'Select which token you would like to send. ',
HELP_7_Desc_6               : 'If you do not see the token listed ',
HELP_7_Desc_7               : 'Click "Custom". ',
HELP_7_Desc_8               : 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
HELP_7_Desc_9               : 'Click "Save". ',
HELP_7_Desc_10              : 'You can now send that token as well as see it\'s balance in the sidebar. ',
HELP_7_Desc_11              : 'Click "Generate Transaction". ',
HELP_7_Desc_12              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_7_Desc_13              : 'Click the blue "Send Transaction" button below that. ',
HELP_7_Desc_14              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_7_Desc_15              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ',

HELP_8_Title                : '8) What happens if your site goes down? ',
HELP_8_Desc_1               : 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. ',
HELP_8_Desc_2               : 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. ',
HELP_8_Desc_3               : 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. ',
HELP_8_Desc_4               : 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. ',

HELP_8CX_Title              : '8) What happens if MyEtherWallet CX disappears? ',
HELP_8CX_Desc_1             : 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. ',
HELP_8CX_Desc_2             : 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. ',
HELP_8CX_Desc_3             : 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. ',

HELP_9_Title                : '9) Is the "Send Ether & Tokens" page offline? ',
HELP_9_Desc_1               : 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

HELP_10_Title               : '10) How do I make an offline transaction? ',
HELP_10_Desc_1              : 'Navigate to the "Offline Transaction" page via your online computer. ',
HELP_10_Desc_2              : 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
HELP_10_Desc_3              : 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
HELP_10_Desc_4              : 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_5              : 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_6              : 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
HELP_10_Desc_7              : 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ',
HELP_10_Desc_8              : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_10_Desc_9              : 'Press the "GENERATE SIGNED TRANSACTION" button. ',
HELP_10_Desc_10             : 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ',
HELP_10_Desc_11             : 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. ',

HELP_12_Title               : '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ',
HELP_12_Desc_1              : 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Go to the "View Wallet Info" page. ',
HELP_12_Desc_3              : 'Unlock your wallet using your **encrypted** private key or JSON file. ',
HELP_12_Desc_4              : 'Go to the "My Wallets" page. ',
HELP_12_Desc_5              : 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
HELP_12_Desc_6              : 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
HELP_12_Desc_7              : 'Open the Ethereum Wallet application. ',
HELP_12_Desc_8              : 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ',
HELP_12_Desc_10             : 'Your account should show up immediately under "Accounts." ',
HELP_12_Desc_11             : 'Using your unencrypted private key... ',
HELP_12_Desc_12             : 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
HELP_12_Desc_13             : 'Select your wallet file -or- enter/paste your private key to unlock your wallet. ',
HELP_12_Desc_14             : 'Copy Your Private Key (unencrypted). ',
HELP_12_Desc_15             : 'If you are on a Mac ',
HELP_12_Desc_15b            : 'If you are on a PC ',
HELP_12_Desc_16             : 'Open Text Edit and paste this private key. ',
HELP_12_Desc_17             : 'Go to the menu bar and click "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
HELP_12_Desc_19             : 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_21             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_22             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
HELP_12_Desc_23             : 'Open Notepad & paste the private key ',
HELP_12_Desc_24             : 'Save the file as `nothing_special_delete_me.txt` at `C:` ',
HELP_12_Desc_25             : 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_27             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_28             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

HELP_13_Title               : '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
HELP_13_Desc_1              : 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ',

HELP_14_Title               : '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? ',
HELP_14_Desc_1              : 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ',
HELP_15_Desc_1              : 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ',

HELP_16_Title               : '16) How do I check the balance of my account? ',
HELP_16_Desc_1              : 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io ',

HELP_17_Title               : '17) Why isn\'t my balance showing up when I unlock my wallet? ',
HELP_17_Desc_1              : ' This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ',

HELP_18_Title               : '18) Where is my geth wallet file? ',

HELP_19_Title               : '19) Where is my Mist wallet file? ',
HELP_19_Desc_1              : 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

HELP_20_Title               : '20) Where is my pre-sale wallet file? ',
HELP_20_Desc_1              : 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

HELP_21_Title               : '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? ',
HELP_21_Desc_1              : 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ',
HELP_21_Desc_2              : 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ',
HELP_21_Desc_3              : 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ',
HELP_21_Desc_4              : 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ',
HELP_21_Desc_5              : 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
HELP_21_Desc_6              : 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ',
HELP_21_Desc_7              : '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ',
HELP_21_Desc_8              : 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. ',

HELP_SecCX_Title            : 'Security - MyEtherWallet CX ',
HELP_SecCX_Desc_1           : 'Where is this extension saving my information? ',
HELP_SecCX_Desc_2           : 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. ',
HELP_SecCX_Desc_3           : 'What information is saved? ',
HELP_SecCX_Desc_4           : 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. ',
HELP_SecCX_Desc_5           : 'Why aren\'t the nickname and wallet address encrypted? ',
HELP_SecCX_Desc_6           : 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. ',

HELP_Sec_Title              : 'Security ',
HELP_Sec_Desc_1             : 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. ',
HELP_Sec_Desc_2             : 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. ',
HELP_Sec_Desc_3             : 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. ',
HELP_Sec_Desc_4             : 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ',
HELP_Sec_Desc_6             : 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
HELP_Sec_Desc_8             : 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ',

HELP_FAQ_Title              : 'More Helpful Answers to Frequent Questions ',
HELP_Contact_Title          : 'Ways to Get in Touch '
};

module.exports = ar;
