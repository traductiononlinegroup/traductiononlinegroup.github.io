// Variables
const language = localStorage.getItem('language') || 'Nothing'

// DOM Elements
const languagePicker = document.querySelector('#language-picker')

// Buttons' Event Listeners
document.querySelector('button#contact-us').addEventListener('click', () => {
    document.querySelector('#page-3').scrollIntoView(true)
})

document.querySelector('button#go-to-top').addEventListener('click', () => {
    document.querySelector('#page-1').scrollIntoView(true)
})

// Languages Translations
const data = {
    english: {
        title: 'Speak the world',
        titleSpan: 'one word at a time',
        paragraph: 'We are committed to respecting and guaranteeing the confidentiality of your documents.',
        paragraphSpan: 'And we also commit to respecting the agreed deadline for the translation.',
        contactUs: 'Contact us',
        cardTitle1: 'Translation of scientific research articles',
        cardDetails1: [
            'Science & Technology',
            'Human & Social Sciences',
            'Economics',
            'Educational Sciences',
            'Legal and Political Sciences',
            'Language and Literature Sciences',
            'etc.'
        ],
        cardTitle2: 'Translation of academic documents',
        cardDetails2: [
            'Reports',
            'Research Projects',
            'Memoirs',
            'Theses',
            'etc.'
        ],
        cardTitle3: 'Translation of any other document',
        cardDetails3: [
            'Translation of all types of documents including:',
            'Word',
            'PDF',
            'Image',
            'Photo',
            'etc.'
        ],
        address: 'Saida, Algeria'
    },
    french: {
        title: 'Parlez le monde',
        titleSpan: 'un mot à la fois',
        paragraph: 'Nous nous engageons à respecter et garantir la confidentialité de vos documents.',
        paragraphSpan: 'Et nous nous engageons également à respecter le délai convenu pour la traduction.',
        contactUs: 'Contactez-nous',
        cardTitle1: 'Traduction d\'articles de recherche scientifique',
        cardDetails1: [
            'Science & Technologie',
            'Sciences Humaines & Sociales',
            'Sciences Economiques',
            'Sciences de l\'Education',
            'Sciences Juridiques & Politiques',
            'Sciences du Langage & des Litératures',
            'etc.'
        ],
        cardTitle2: 'Traduction de documents académiques',
        cardDetails2: [
            'Rapports',
            'Projets de recherche',
            'Mémoires',
            'Thèses',
            'etc.'
        ],
        cardTitle3: 'Traduction de tout autre document',
        cardDetails3: [
            'Traduction de tout types de documents y compris:',
            'Word',
            'PDF',
            'Image',
            'Photo',
            'etc.'
        ],
        address: 'Saïda, Algérie'
    },
    arabic: {
        title: 'تحدث للعالم',
        titleSpan: 'كلمة واحدة في كل مرة',
        paragraph: 'نحن ملتزمون باحترام وضمان سرية الوثائق.',
        paragraphSpan: 'كما نتعهد باحترام الموعد النهائي المتفق عليه للترجمة.',
        contactUs: 'اتصلوا بنا',
        cardTitle1: 'ترجمة المقالات البحثية العلمية',
        cardDetails1: [
            'العلوم و التكنولوجيا',
            'العلوم الإنسانية و الإجتماعية',
            'العلوم الاقتصادية',
            'العلوم التربوية',
            'العلوم القانونية و السياسية',
            'علوم اللغة و الآداب',
            'إلخ.'
        ],
        cardTitle2: 'ترجمة الوثائق الأكاديمية',
        cardDetails2: [
            'تقارير',
            'مشاريع بحثية',
            'مذكرة تخرج',
            'أطروحة بحثية',
            'إلخ.'
        ],
        cardTitle3: 'ترجمة وثائق أخرى',
        cardDetails3: [
            'ترجمة جميع أنواع المستندات بما فيه:',
            'ملف وورد',
            'ملف PDF',
            'صورة',
            'صورة رقمية',
            'إلخ.'
        ],
        address: 'سعيدة، الجزائر'
    },
    spanish: {
        title: 'Habla el mundo',
        titleSpan: 'una palabra a la vez',
        paragraph: 'Nos comprometemos a respetar y garantizar la confidencialidad de sus documentos.',
        paragraphSpan: 'Y también nos comprometemos a respetar el plazo acordado para la traducción.',
        contactUs: 'Contáctenos',
        cardTitle1: 'Traducción de artículos de investigación científica.',
        cardDetails1: [
            'Ciencia y tecnología',
            'Ciencias Humanas y Sociales',
            'Ciencias económicas',
            'Ciencias de la Educación',
            'Ciencias Jurídicas y Políticas',
            'Ciencias de la Lengua y la Literatura',
            'etc.'
        ],
        cardTitle2: 'Traducción de documentos académicos.',
        cardDetails2: [
            'Informes',
            'Proyectos de investigación',
            'Memorias',
            'Tesis',
            'etc.'
        ],
        cardTitle3: 'Traducción de cualquier otro documento.',
        cardDetails3: [
            'Traducción de todo tipo de documentos incluyendo:',
            'Word',
            'PDF',
            'Imagen',
            'Foto',
            'etc.'
        ],
        address: 'Saida, Argelia'
    },
    german: {
        title: 'Sprich die Welt',
        titleSpan: 'ein Wort nach dem anderen',
        paragraph: 'Wir verpflichten uns, die Vertraulichkeit Ihrer Dokumente zu respektieren und zu gewährleisten.',
        paragraphSpan: 'Darüber hinaus verpflichten wir uns, den vereinbarten Termin für die Übersetzung einzuhalten.',
        contactUs: 'Kontaktieren Sie uns',
        cardTitle1: 'Übersetzung wissenschaftlicher Forschungsartikel',
        cardDetails1: [
            'Wissenschaft und Technologie',
            'Human- und Sozialwissenschaften',
            'Wirtschaft',
            'Erziehungswissenschaften',
            'Rechts- und Politikwissenschaften',
            'Sprach- und Literaturwissenschaften',
            'etc.'
        ],
        cardTitle2: 'Übersetzung akademischer Dokumente',
        cardDetails2: [
            'Berichte',
            'Forschungsprojekte',
            'Erinnerungen',
            'Thesen',
            'etc.'
        ],
        cardTitle3: 'Übersetzung jedes anderen Dokuments',
        cardDetails3: [
            'Übersetzung aller Arten von Dokumenten, einschließlich:',
            'Word',
            'PDF',
            'Bild',
            'Foto',
            'etc.'
        ],
        address: 'Saida, Algerien'
    }
}

// Logic
window.onload = () => {
    if (language !== 'Nothing') {
        languagePicker.value = language
        setLanguage(language)
    } else {
        setLanguage('english')
    }
}

languagePicker.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value
    localStorage.setItem('language', selectedLanguage)
    setLanguage(selectedLanguage)
})

// Translation Function
function setLanguage(savedLanguage) {
    document.querySelector('#title-bold').innerHTML = `${data[savedLanguage].title}<span>${data[savedLanguage].titleSpan}</span>`
    document.querySelector('#page-1 p').innerHTML = `${data[savedLanguage].paragraph}<span>${data[savedLanguage].paragraphSpan}</span>`
    document.querySelector('#contact-us').innerText = data[savedLanguage].contactUs
    
    document.querySelectorAll('.card-title')[0].innerText = data[savedLanguage].cardTitle1
    document.querySelectorAll('.card-title')[1].innerText = data[savedLanguage].cardTitle2
    document.querySelectorAll('.card-title')[2].innerText = data[savedLanguage].cardTitle3

    for (let i = 0; i < 7; i++) {
        document.querySelectorAll('.card-details')[0].querySelector('ul').querySelectorAll('li')[i].innerText = data[savedLanguage].cardDetails1[i]
    }
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll('.card-details')[1].querySelector('ul').querySelectorAll('li')[i].innerText = data[savedLanguage].cardDetails2[i]
    }
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll('.card-details')[2].querySelector('ul').querySelectorAll('li')[i].innerText = data[savedLanguage].cardDetails3[i]
    }

    document.querySelector('#contact-us-title>div').innerText = data[savedLanguage].contactUs
    document.querySelector('#text-gps').innerText = data[savedLanguage].address
}
