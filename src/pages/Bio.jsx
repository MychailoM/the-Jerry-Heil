import "./../styles/Bio.css";
import { Header } from "../components/Header";

import { SongsList } from "../components/SongsList";


export function Bio() {
  return (
    <main className="bio">
      <div className="bio__overlay" />
      <Header />

       

      {/* Основна біографія */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/main-photo.jpg"
              alt="Jerry Heil (Яна Шемаєва)"
            />
          </div>

          <div className="bio-text-content">
            <h1 className="bio-title">Біографія</h1>
            <div className="bio-line"></div>

            <p className="bio-text">
              Jerry Heil (справжнє ім'я — Яна Олександрівна Шемаєва; народилася
              21 жовтня 1995 року у Василькові Київської області) — українська
              співачка, авторка пісень і музична продюсерка. Вона стала відомою
              завдяки відеоблогу на YouTube, де публікувала кавери на пісні
              українських і закордонних виконавців. Широку популярність артистці
              принесла авторська композиція «Охрана, отмєна», випущена у 2019
              році. У 2024 році разом із реперкою alyona alyona Jerry Heil
              представляла Україну на Пісенному конкурсі «Євробачення» з піснею
              «Teresa & Maria». Український дует посів третє місце у фіналі.
              Згодом співачка продовжила сольну кар'єру, експериментувала з
              музичними жанрами та розвивала власний музичний лейбл.
            </p>
          </div>
        </div>
      </section>

      {/* Ранні роки */}
      <section className="bio-part bio-part--reverse">
        <div className="container">
          <div className="bio-text-content">
            <h2 className="bio-title">Ранні роки</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Яна Шемаєва народилася 21 жовтня 1995 року у місті Васильків
              Київської області. Вона зростала в родині підприємців: її батьки
              займалися торгівлею. Маму співачки звати Людмила, а тата —
              Олександр. Також у Яни є молодший брат Денис.
            </p>

            <p className="bio-text">
              Музика супроводжувала Яну з дитинства. Зацікавлення співом значною
              мірою сформувалося завдяки родині. Її мама також любить співати, а
              музичні здібності Яни пов'язують із родинними талантами. З
              раннього віку дівчина прагнула розвивати голос і здобувати
              професійні музичні навички.
            </p>

            <p className="bio-text">
              Пізніше дитяче захоплення перетворилося на серйозне заняття, яке
              визначило її майбутню професію. Яна почала навчатися музиці,
              виступати та експериментувати з різними способами виконання
              пісень.
            </p>
          </div>

          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/young.jpg"
              alt="Jerry Heil у дитинстві"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Початок музичної кар'єри */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/start-on-music.jpg"
              alt="Початок музичної кар'єри Jerry Heil"
              loading="lazy"
            />
          </div>

          <div className="bio-text-content">
            <h2 className="bio-title">Початок музичної кар'єри</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              З дитинства Яна займалася музикою та приблизно з трьох до
              п'ятнадцяти років відвідувала музичну школу. Згодом вона навчалася
              у Київському інституті музики імені Рейнгольда Глієра та
              Національній музичній академії України імені Петра Чайковського.
            </p>

            <p className="bio-text">
              У підлітковому віці Яна почала публікувати відео на YouTube. Одним
              із ранніх каверів стала композиція «Somewhere Only We Know»
              британського гурту Keane. З 2012 року вона активно записувала
              переспіви пісень таких виконавців, як «Океан Ельзи», The Hardkiss,
              Twenty One Pilots і Kodaline.
            </p>

            <p className="bio-text">
              Завдяки відеоблогу співачка поступово сформувала власну аудиторію.
              У 2017 році вона випустила альбом «Де мій дім» на лейблі Vidlik
              Records. У 2018 році Яна взяла участь у телевізійному шоу
              «Х-Фактор», а згодом зосередилася на створенні авторської музики.
            </p>

            <p className="bio-text">
              Важливим переломним моментом став вихід пісні «Охрана, отмєна»,
              яка набула популярності в інтернеті та допомогла Jerry Heil
              заявити про себе як про самостійну виконавицю.
            </p>
          </div>
        </div>
      </section>

      {/* Участь у Х-Факторі */}
      <section className="bio-part bio-part--reverse">
        <div className="container">
          <div className="bio-text-content">
            <h2 className="bio-title">Участь у «Х-Факторі»</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              У 2018 році Jerry Heil стала учасницею українського телевізійного
              музичного шоу «Х-Фактор». Проєкт дав їй можливість представити
              свій вокал широкій аудиторії та отримати досвід виступів перед
              суддями й телеглядачами.
            </p>

            <p className="bio-text">
              Хоча участь у шоу не стала фінальною точкою її професійного шляху,
              цей досвід допоміг співачці краще зрозуміти сценічну роботу. Після
              проєкту Яна продовжила розвивати власний канал, писати пісні та
              шукати оригінальне музичне звучання.
            </p>
          </div>

          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/x-factor.jpg"
              alt="Jerry Heil під час участі у Х-Факторі"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Національні відбори */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/vidbir.jpg"
              alt="Jerry Heil на Національному відборі"
              loading="lazy"
            />
          </div>

          <div className="bio-text-content">
            <h2 className="bio-title">Національні відбори на «Євробачення»</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Одним із найважливіших напрямів кар'єри Jerry Heil стала участь у
              Національному відборі на «Євробачення». Артистка неодноразово
              намагалася отримати право представляти Україну на міжнародному
              конкурсі, поступово змінюючи музичний стиль і сценічну подачу.
              <br /> <br />
            </p>

            <h3 className="bio-subtitle">2020 — «Vegan»</h3>

            <p className="bio-text">
              У 2020 році Jerry Heil виступила у фіналі Національного відбору з
              композицією «Vegan». Пісня вирізнялася незвичною подачею та
              англомовним текстом. За результатами фіналу співачка посіла шосте
              місце. Цей виступ став однією з перших спроб артистки представити
              свою творчість на великій телевізійній сцені такого формату.
              <br /> <br />
            </p>

            <h3 className="bio-subtitle">2023 — «When God Shut the Door»</h3>

            <p className="bio-text">
              У 2023 році Яна повернулася до Національного відбору з піснею
              «When God Shut the Door». Композиція мала драматичне звучання та
              передавала теми віри, надії й подолання труднощів. Jerry Heil
              посіла третє місце у фіналі.
              <br /> <br />
            </p>

            <h3 className="bio-subtitle">2024 — «Teresa & Maria»</h3>

            <p className="bio-text">
              У 2024 році Jerry Heil виступила разом з українською реперкою
              alyona alyona. Їхня спільна композиція «Teresa & Maria» перемогла
              у Національному відборі. Пісня поєднала мелодійний вокал, реп,
              сучасну попмузику та українські культурні мотиви.
              <br /> <br />
            </p>

            <h3 className="bio-subtitle">2026 — «CATHARTICUS (prayer)»</h3>

            <p className="bio-text">
              У 2026 році Jerry Heil знову взяла участь у Національному відборі,
              цього разу із сольним номером «CATHARTICUS (prayer)». У композиції
              поєдналися сучасне попзвучання, духовні мотиви та елементи
              вокальної традиції. Артистка посіла третє місце у фіналі.
            </p>
          </div>
        </div>
      </section>

      {/* Євробачення 2024 */}
      <section className="bio-part bio-part--reverse">
        <div className="container">
          <div className="bio-text-content">
            <h2 className="bio-title">«Євробачення-2024»</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              У травні 2024 року Jerry Heil разом з alyona alyona представляла
              Україну на 68-му Пісенному конкурсі «Євробачення», який відбувся у
              місті Мальме, Швеція.
            </p>

            <p className="bio-text">
              Артистки виконали пісню «Teresa & Maria». Композиція поєднала
              вокальні партії, реп, елементи української музичної традиції та
              сучасну сценічну постановку. У виступі порушувалися теми жіночої
              сили, єдності та духовної стійкості.
            </p>

            <p className="bio-text">
              Український дует успішно пройшов до фіналу й посів третє місце.
              Цей результат став одним із найпомітніших досягнень Jerry Heil на
              міжнародній сцені та привернув додаткову увагу до сучасної
              української музики.
            </p>
          </div>

          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/eurovision.jpg"
              alt="Jerry Heil та alyona alyona на Євробаченні"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Веганство */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/vegan.jpg"
              alt="Jerry Heil і композиція Vegan"
              loading="lazy"
            />
          </div>

          <div className="bio-text-content">
            <h2 className="bio-title">Веганство та етичний спосіб життя</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              У 2020 році Jerry Heil виступила на Національному відборі на
              «Євробачення» з піснею «Vegan», привернувши увагу до теми
              свідомого харчування. Проте для Яни це не просто творчий образ, а
              повноцінна філософія життя та послідовний етичний вибір.
            </p>

            <p className="bio-text">
              Співачка дотримується веганства: вона повністю відмовилася від
              продуктів тваринного походження та свідомо не носить одяг чи
              аксесуари з хутра та шкіри. У своїх інтерв'ю вона також згадувала
              про власний досвід сироїдіння, який став частиною її шляху до
              гармонійного раціону.
            </p>

            <p className="bio-text">
              На своїй сторінці в Instagram співачка постійно порушує важливі
              етичні питання. Вона закликає до гуманного та свідомого ставлення
              до тварин, транслюючи думку про те, що вони є рівноправними
              мешканцями нашої планети, а не ресурсом для використання людиною.
            </p>
          </div>
        </div>
      </section>

      {/* Музична освіта */}
      <section className="bio-part bio-part--reverse">
        <div className="container">
          <div className="bio-text-content">
            <h2 className="bio-title">Музична освіта та Berklee</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Професійне музичне навчання відіграло важливу роль у становленні
              Jerry Heil. Після музичної школи Яна навчалася у Київському
              інституті музики імені Рейнгольда Глієра, де вивчала хорове
              диригування, а також у Національній музичній академії України
              імені Петра Чайковського.
            </p>

            <p className="bio-text">
              У 2022 році артистка повідомила про вступ до Berklee College of
              Music у Бостоні, США. Це відомий музичний коледж, у якому навчають
              сучасної музики, композиції, виконання та музичного продюсування.
            </p>

            <p className="bio-text">
              Міжнародний освітній досвід став частиною її професійного
              розвитку. Співачка продовжила працювати з різними жанрами,
              створювати авторські композиції та розвивати власне бачення
              сучасної попмузики.
            </p>
          </div>

          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/berklee.jpg"
              alt="Jerry Heil та її музична освіта"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Дискографія */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/discography.jpg"
              alt="Музична творчість Jerry Heil"
              loading="lazy"
            />
          </div>

          <div className="bio-text-content">
            <h2 className="bio-title">Пісні, альбоми та музичний стиль</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Jerry Heil працює в жанрі попмузики, поєднуючи його з електронним
              звучанням, гумором, фольклорними мотивами та емоційними вокальними
              партіями. У її творчості є як легкі іронічні композиції, так і
              драматичні пісні.
            </p>

            <p className="bio-text">
              У 2017 році вийшов альбом «Де мій дім». У 2019 році артистка
              випустила дебютний студійний альбом «#Я_ЯНА», до якого увійшла
              композиція «Охрана, отмєна».
            </p>

            <p className="bio-text">
              Серед відомих пісень Jerry Heil — «Охрана, отмєна», «Вільна каса»,
              «#Бомба_ракета_пушка_граната», «When God Shut the Door», «Teresa &
              Maria», «Додай гучності(12 points)» та «CATHARTICUS (prayer)».
            </p>

            <p className="bio-text">
              У 2021 році вийшов альбом «МАНДАРИНИ І ОЛЕНІ», а у 2025 році —
              альбом «АРХЕТИПИ». Різноманітність музичних робіт демонструє
              прагнення співачки розширювати власний стиль і не обмежуватися
              одним жанром.
            </p>
          </div>
        </div>
      </section>

      {/* Власний лейбл */}
      <section className="bio-part bio-part--reverse">
        <div className="container">
          <div className="bio-text-content">
            <h2 className="bio-title">Лейбл NOVA MUSIC</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Jerry Heil розвивається не лише як виконавиця та авторка пісень, а
              й як учасниця музичної індустрії. У 2023 році вона повідомила про
              створення власного лейблу NOVA MUSIC разом із Тарасом
              Себестяновичем.
            </p>

            <p className="bio-text">
              Одним із напрямів роботи лейблу є підтримка нових виконавців і
              розвиток музичних проєктів.
            </p>

            <p className="bio-text">
              Створення лейблу стало новим етапом кар'єри Яни, дозволивши їй
              долучатися до розвитку інших музикантів та розширювати власну
              діяльність за межами сольних виступів.
            </p>
          </div>

          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/nova-music.jpg"
              alt="Jerry Heil та лейбл NOVA MUSIC"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Нагороди */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/awards.jpg"
              alt="Jerry Heil на музичній події"
              loading="lazy"
            />
          </div>

          <div className="bio-text-content">
            <h2 className="bio-title">Нагороди та визнання</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Творчість Jerry Heil отримала визнання в Україні та за кордоном. У
              2023 році вона стала переможницею глядацького голосування Music
              Moves Europe Awards — європейської премії, яка підтримує нових
              артистів.
            </p>

            <p className="bio-text">
              У 2024 році Jerry Heil потрапила до переліку Forbes «30 до 30». Її
              участь у «Євробаченні» разом з alyona alyona та третє місце у
              фіналі стали важливим досягненням для її міжнародної кар'єри.
            </p>

            <p className="bio-text">
              Популярність артистки зросла від перших каверів у соціальних
              мережах до виступів на міжнародній сцені, а її пісні стали
              відомими далеко за межами української аудиторії.
            </p>
          </div>
        </div>
      </section>

      {/* Благодійність */}
      <section className="bio-part bio-part--reverse">
        <div className="container">
          <div className="bio-text-content">
            <h2 className="bio-title">Благодійність і підтримка України</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              Jerry Heil долучалася до благодійних і суспільних ініціатив. У
              2019 році вона представила кліп «Моя дитяча мрія», створений у
              межах проєкту «Здійсни мрію».
            </p>

            <p className="bio-text">
              Після початку повномасштабного вторгнення Росії у 2022 році
              артистка брала участь у музичних ініціативах на підтримку України.
              Її творчість стала одним зі способів розповідати міжнародній
              аудиторії про українську культуру та події в країні.
            </p>

            <p className="bio-text">
              У своїх виступах і публічній діяльності співачка продовжує
              представляти українську музику та підтримувати увагу до України на
              міжнародному рівні.
            </p>
          </div>

          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/charity.jpg"
              alt="Jerry Heil під час поїздки в Мальме"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Цікаві факти */}
      <section className="bio-part">
        <div className="container">
          <div className="bio-photo-wrap">
            <img
              className="bio-photo"
              src="/photos/bio/facts.jpg"
              alt="Jerry Heil на сцені"
              loading="lazy"
            />
          </div>

          <div className="bio-text-content">
            <h2 className="bio-title">Узагальнення</h2>
            <div className="bio-line"></div>

            <p className="bio-text">
              <strong>Справжнє ім'я.</strong> Jerry Heil — сценічний псевдонім
              Яни Олександрівни Шемаєвої.
            </p>
            <br />

            <p className="bio-text">
              <strong>Початок кар'єри.</strong> До популярності артистка
              публікувала кавери на YouTube, виконуючи пісні українських і
              закордонних музикантів.
            </p>
            <br />

            <p className="bio-text">
              <strong>Музична освіта.</strong> Яна навчалася в українських
              музичних закладах і повідомляла про вступ до Berklee College of
              Music у США.
            </p>
            <br />

            <p className="bio-text">
              <strong>Національні відбори.</strong>
              Jerry Heil брала участь у відборах 2020, 2023, 2024 і 2026 років.
              У 2024 році вона перемогла разом з alyona alyona.
            </p>
            <br />

            <p className="bio-text">
              <strong>Міжнародний успіх.</strong>У 2024 році Jerry Heil та
              alyona alyona посіли третє місце на «Євробаченні».
            </p>
            <br />

            <p className="bio-text">
              <strong>Авторка пісень.</strong> Окрім виконання, Яна бере участь
              у створенні власних композицій і музичних проєктів.
            </p>
            <br />

            <p className="bio-text">
              <strong>Музичний лейбл.</strong> У 2023 році вона повідомила про
              створення NOVA MUSIC разом із Тарасом Себестяновичем.
            </p>
          </div>
        </div>
      </section>
      <div className="bio-text-content finaly">
        <p className="bio-text">
          <strong>Загалом, Яна</strong> - чудова, щира, чуйна, й талановита
          людина, яка підкорює серця слухачів своєю творчістю. Її музика надихає
          багатьох людей вірити в себе. Розкривати власні таланти та сміливо йти
          до своєї мети. Вона є прикладом наполегливості, творчої свободи та
          відданості улюлбленій справі. Своїм унікальним стилем і незвичайним
          звучанням Jerry Heil робить вагомий внесок у розвиток сучасної
          української музики. Її творчість допомагає популяризувати українську
          культуру по всьому світу. <br />
          ЯНО щиро дякуйоу за вашу старанну працю &#128151;!
        </p>
      </div>
    </main>
  );
}
