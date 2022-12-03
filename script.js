let set = "";
let set1 = "";
function changeColor(finalColor) {
    document.getElementById("gradient").style.background = "linear-gradient(180deg, #ffffff, #ffffff, " + finalColor + ")";
    document.getElementById("gradient").style.backgroundSize = "100% 300%";
    document.getElementById("gradient").style.backgroundPosition = "0% 75%";
}
function revertColor(){
    document.getElementById("gradient").style.backgroundPosition = "0% 0%";
}
function change(name, finalColor) {
    if (set !== name){
        if (set !== ""){
            revertColor();
            setTimeout(function () {
                changeColor(finalColor);
                set = name;
            }, 1300);
        } else {
            changeColor(finalColor);
            set = name;
        }
    }
}

function changeText() {
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").style.animation = "slide-bottom 0.9s ease-in-out forwards";
    document.getElementById("result1").style.visibility = "visible";
    document.getElementById("result1").style.animation = "slide-bottom 0.9s ease-in-out forwards";
    document.getElementById("desc-text").scrollIntoView({behavior: "smooth"});


    setTimeout(function () {
        document.getElementById("result").style.animation = "none";
        document.getElementById("result1").style.animation = "none";
    }, 900);
}
function revertText() {
    document.getElementById("result1").style.animation = "slide-bottom 1.1s ease-in-out reverse";
    document.getElementById("result").style.animation = "slide-bottom 1.1s ease-in-out reverse";
    document.getElementById("heading-text").scrollIntoView({behavior: "smooth"});
    setTimeout(function () {
        document.getElementById("result").style.visibility = "hidden";
        document.getElementById("result1").style.visibility = "hidden";
        document.getElementById("result").style.animation = "none";
        document.getElementById("result1").style.animation = "none";
    }, 1000);
}
function changeDescription(name, text1, text2) {
    if (set1 !== name){
        if (set1 !== ""){
            revertText();
            setTimeout(function () {
                document.getElementById("result").innerHTML = text1;
                document.getElementById("result1").innerHTML = text2;
                changeText();
                set1 = name;
            }, 1300);
        } else {
            document.getElementById("result").innerHTML = text1;
            document.getElementById("result1").innerHTML = text2;
            changeText();
            set1 = name;
        }
    }
}

document.getElementById("swift").addEventListener("click", function () {
    change("swift", "#ff8300");
    let text1 = "<h2>Swift</h2>";
    let text2 = "<p id='desc-text'>Swift jest językiem programowania ogólnego przeznaczenia, stworzonym przez firmę Apple. Jego celem jest zastąpienie języka Objective-C, który był używany do pisania aplikacji na platformę iOS. Swift jest językiem wieloparadygmatowym, wspierającym programowanie obiektowe, imperatywne i funkcyjne. Jego składnia jest zbliżona do języka C, a jego semantyka jest zbliżona do języka Ruby. Swift jest językiem statycznie typowanym, ale w przeciwieństwie do większości języków statycznie typowanych, Swift nie wymaga podawania typów zmiennych i argumentów funkcji. Swift jest językiem o wysokiej wydajności, który jest kompilowany do kodu maszynowego. Swift jest językiem otwartym, co oznacza, że jego kod źródłowy jest dostępny dla wszystkich i można go modyfikować. Swift jest językiem wieloplatformowym, co oznacza, że można go używać na systemach operacyjnych macOS, iOS, watchOS, tvOS oraz Linux.</p>";
    changeDescription("swift",text1, text2);
});

document.getElementById("dart").addEventListener("click", function () {
    change("dart", "#00b4ab");
    let text1 = "<h2>Dart</h2>";
    let text2 = "<p id='desc-text'>Dart to obiektowy język programowania ogólnego przeznaczenia, implementowany m.in. we frameworku Flutter. Został stworzony przez firmę Google i udostępniony w 2011 roku. W sierpniu 2018 roku wydano Dart 2.0 ze zmianami językowymi. Skupiono się również na rozwoju wsparcia dla frameworków dla aplikacji internetowych i mobilnych oraz udostępnianiu niektórych narzędzi i komponentów, które obsługują korzystanie z Darta. Google udostępnia przeglądarkę Dartium pozwalającą programistom na bezpośrednie użycie języka w przeglądarce celem przyspieszenia rozwoju aplikacji. Przeglądarka ta nie jest jednak przeznaczona dla użytkownika końcowego i konieczna jest kompilacja kodu Dart do JavaScriptu.</p>";
    changeDescription("dart", text1, text2);
});

document.getElementById("golang").addEventListener("click", function () {
    change("golang", "#00acd7");
    let text1 = "<h2>Go</h2>";
    let text2 = "<p id='desc-text'>Go (często nazywany także golang) to wieloparadygmatowy język programowania opracowany przez pracowników firmy Google: Roberta Griesemera, Roba Pike’a oraz Kena Thompsona. Łączy w sobie łatwość pisania aplikacji charakterystyczną dla języków dynamicznych (np. Python, Lisp), jak również wydajność języków kompilowanych (np. C, C++). Dostępny jest kompilator na platformę x86, x64 i ARM o nazwie go. Został również stworzony kompilator na bazie GNU Compiler Collection – gccgo.</p>";
    changeDescription("golang", text1, text2);
});

document.getElementById("rust").addEventListener("click", function () {
    change("rust", "#d26825");
    let text1 = "<h2>Rust</h2>";
    let text2 = "<p id='desc-text'>Rust to kompilowany język programowania ogólnego przeznaczenia rozwijany przez Fundację Mozilla. Stworzony z myślą o „bezpieczeństwie, współbieżności i praktyczności”. Został zaprojektowany przez Graydon Hoare w 2006 roku, w 2009 projekt został przyjęty pod skrzydła Mozilla Foundation. W 2011 roku kompilator języka, znany jako rustc, został z powodzeniem skompilowany przez samego siebie.</p>";
    changeDescription("rust", text1, text2);
});

document.getElementById("kotlin").addEventListener("click", function () {
    change("kotlin", "#7f52ff");
    let text1 = "<h2>Kotlin</h2>";
    let text2 = "<p id='desc-text'>Kotlin to statycznie typowany język programowania działający na maszynie wirtualnej Javy, który jest głównie rozwijany przez programistów JetBrains. Nazwa języka pochodzi od wyspy Kotlin niedaleko Petersburga. Kotlin jest zaprojektowany z myślą o pełnej interoperacyjności z językami działającymi na maszynie wirtualnej Javy. </p>";
    changeDescription("kotlin", text1, text2);
});

document.getElementById("python").addEventListener("click", function () {
    change("python", "#2b76b7");
    let text1 = "<h2>Python</h2>";
    let text2 = "<p id='desc-text'>Python to język programowania wysokiego poziomu ogólnego przeznaczenia, o rozbudowanym pakiecie bibliotek standardowych, którego ideą przewodnią jest czytelność i klarowność kodu źródłowego. Jego składnia cechuje się przejrzystością i zwięzłością. Python wspiera różne paradygmaty programowania: obiektowy, imperatywny oraz w mniejszym stopniu funkcyjny. Posiada w pełni dynamiczny system typów i automatyczne zarządzanie pamięcią, będąc w tym podobnym do języków Perl, Ruby, Scheme czy Tcl. Podobnie jak inne języki dynamiczne jest często używany jako język skryptowy. Interpretery Pythona są dostępne na wiele systemów operacyjnych. Python rozwijany jest jako projekt Open Source zarządzany przez Python Software Foundation, która jest organizacją non-profit. Standardową implementacją języka jest CPython (napisany w C), ale istnieją też inne, np. Jython (napisany w Javie), CLPython napisany w Common Lisp, IronPython (na platformę .NET) i PyPy (na platformę bootstrap). </p>";
    changeDescription("python", text1, text2);
});

document.getElementById("php").addEventListener("click", function () {
    change("php", "#7f8bc7");
    let text1 = "<h2>PHP</h2>";
    let text2 = "<p id='desc-text'>PHP to interpretowany, skryptowy język programowania zaprojektowany do generowania stron internetowych i budowania aplikacji webowych w czasie rzeczywistym. PHP jest najczęściej stosowany do tworzenia skryptów po stronie serwera WWW, ale może być on również używany do przetwarzania danych z poziomu wiersza poleceń, a nawet do pisania programów pracujących w trybie graficznym. Implementacja PHP wraz z serwerem WWW Apache oraz serwerem baz danych MySQL określana jest jako platforma AMP (w środowisku Linux – LAMP, w Windows – WAMP). </p>";
    changeDescription("php", text1, text2);
});

document.getElementById("cpp").addEventListener("click", function () {
    change("cpp", "#408ee7");
    let text1 = "<h2>C++</h2>";
    let text2 = "<p id='desc-text'>C++ to język programowania ogólnego przeznaczenia. Język został zaprojektowany przez Bjarne Stroustrupa jako rozszerzenie języka C o obiektowe mechanizmy abstrakcji danych i silną statyczną kontrolę typów. Zachowanie zgodności z językiem C na poziomie kodu źródłowego pozostaje jednym z podstawowych celów projektowych kolejnych standardów języka. Umożliwia abstrakcję danych oraz stosowanie kilku paradygmatów programowania: proceduralnego, obiektowego i generycznego, a także funkcyjnego i modularnego. Charakteryzuje się wysoką wydajnością kodu wynikowego, bezpośrednim dostępem do zasobów sprzętowych i funkcji systemowych, łatwością tworzenia i korzystania z bibliotek (napisanych w C++, C lub innych językach), niezależnością od konkretnej platformy sprzętowej lub systemowej (co gwarantuje wysoką przenośność kodów źródłowych) oraz niewielkim środowiskiem uruchomieniowym. Podstawowym obszarem jego zastosowań są aplikacje i systemy operacyjne. </p>";
    changeDescription("cpp", text1, text2);
});

document.getElementById("java").addEventListener("click", function () {
    change("java", "#f33f17");
    let text1 = "<h2>Java</h2>";
    let text2 = "<p id='desc-text'>Java to współbieżny, oparty na klasach, obiektowy język programowania ogólnego zastosowania. Został stworzony przez grupę roboczą pod kierunkiem Jamesa Goslinga z firmy Sun Microsystems. Java jest językiem tworzenia programów źródłowych kompilowanych do kodu bajtowego, czyli postaci wykonywanej przez maszynę wirtualną. Język cechuje się silnym typowaniem. Jego podstawowe koncepcje zostały przejęte z języka Smalltalk (maszyna wirtualna, zarządzanie pamięcią) oraz z języka C++ (duża część składni i słów kluczowych). </p>";
    changeDescription("java", text1, text2);
});

document.getElementById("javascript").addEventListener("click", function () {
    change("javascript", "#f7df1e");
    let text1 = "<h2>JavaScript</h2>";
    let text2 = "<p id='desc-text'>JavaScript to skryptowy oraz wieloparadygmatowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich. W połowie lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39</p>";
    changeDescription("javascript", text1, text2);
});