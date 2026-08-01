// i18n — Compass UI dictionaries (fleet convention: English source strings ARE
// the keys, so a missing entry falls back to English). Locale comes from
// carino-lang.js (window.CarinoLang.current) and the 'carino:langchange' event.
// This script is deferred and loaded AFTER carino-lang.js, and after the inline
// app script has run — so it re-applies translations to the already-built DOM
// and wraps a few global display helpers (posLabel, matchLabel, …) with t().
// Data (profile names/tags, country names, brand "Carino") stays in English.

const I18N = {
    es: {
        // Header chrome
        'Copy Link': 'Copiar enlace',
        'Copied ✓': 'Copiado ✓',
        'Copy failed': 'Error al copiar',
        'Profiles': 'Perfiles',
        '3D VIEW': 'VISTA 3D',
        '2D VIEW': 'VISTA 2D',
        '⚠ REFERENCE ONLY': '⚠ SOLO REFERENCIA',
        '12 axes': '12 ejes',
        'A playful reference tool — not a scientific, professional, or serious political assessment. All placements are impressionistic broad strokes.':
            'Una herramienta lúdica de referencia; no es una evaluación política científica, profesional ni seria. Todas las ubicaciones son trazos amplios e impresionistas.',
        // Profiles overlay
        'LOAD PROFILE': 'CARGAR PERFIL',
        '· select to auto-fill · for fun & reference, not a serious assessment': '· selecciona para autocompletar · por diversión y referencia, no una evaluación seria',
        '✕ CLOSE': '✕ CERRAR',
        'Search {n} profiles…': 'Buscar entre {n} perfiles…',
        'Leaders': 'Líderes',
        'Historical': 'Históricos',
        'Thinkers': 'Pensadores',
        'Tech & Business': 'Tecnología y negocios',
        'Anime': 'Anime',
        'Games': 'Videojuegos',
        'Film / TV': 'Cine / TV',
        // Live labels
        'ENFORCE ◄': 'IMPONER ◄',
        'SUGGEST ◄': 'SUGERIR ◄',
        'MIND ◄': 'IMPORTA ◄',
        "DON'T MIND": 'INDIFERENTE',
        'MIND ►': 'IMPORTA ►',
        'SUGGEST ►': 'SUGERIR ►',
        'ENFORCE ►': 'IMPONER ►',
        'SAME AS': 'IGUAL QUE',
        'ALMOST SAME AS': 'CASI IGUAL QUE',
        'you would feel at home in': 'te sentirías como en casa en',
        'PROFILE:': 'PERFIL:',
        // Accessibility labels (aria-label on the chart and the profile search)
        '12-axis political compass chart': 'Gráfico de brújula política de 12 ejes',
        'Same as': 'Igual que',
        'Almost same as': 'Casi igual que',
        'You would feel at home in': 'Te sentirías como en casa en',
        'Search profiles': 'Buscar perfiles',
        // Axis names
        'ECONOMIC': 'ECONOMÍA',
        'AUTHORITY': 'AUTORIDAD',
        'SOCIAL': 'SOCIAL',
        'IDENTITY': 'IDENTIDAD',
        'STATE POWER': 'PODER ESTATAL',
        'ECOLOGY': 'ECOLOGÍA',
        'RELIGION': 'RELIGIÓN',
        'FGN POLICY': 'POL. EXTERIOR',
        'TECHNOLOGY': 'TECNOLOGÍA',
        'JUSTICE': 'JUSTICIA',
        'ASSIMILATION': 'ASIMILACIÓN',
        'EPISTEMOLOGY': 'EPISTEMOLOGÍA',
        // Poles
        'Collectivist': 'Colectivista',
        'Free Market': 'Libre mercado',
        'Civil Libertarian': 'Libertario civil',
        'Authoritarian': 'Autoritario',
        'Progressive': 'Progresista',
        'Traditional': 'Tradicional',
        'Internationalist': 'Internacionalista',
        'Nationalist': 'Nacionalista',
        'Decentral.': 'Descentral.',
        'Centralized': 'Centralizado',
        'Green': 'Ecologista',
        'Industrialist': 'Industrialista',
        'Secular': 'Laico',
        'Theocratic': 'Teocrático',
        'Pacifist': 'Pacifista',
        'Militarist': 'Militarista',
        'Precautionary': 'Cauteloso',
        'Accelerationist': 'Aceleracionista',
        'Rehabilitative': 'Rehabilitador',
        'Punitive': 'Punitivo',
        'Multicultural': 'Multicultural',
        'Assimilationist': 'Asimilacionista',
        'Constructivist': 'Constructivista',
        'Essentialist': 'Esencialista',
        // Axis descriptions
        'Collective ownership & central planning vs. private property & free markets. How should resources be organized?':
            'Propiedad colectiva y planificación central frente a propiedad privada y libre mercado. ¿Cómo deberían organizarse los recursos?',
        'Maximum personal freedom vs. strong state control. How much power should government hold over citizens?':
            'Máxima libertad personal frente a fuerte control estatal. ¿Cuánto poder debería tener el gobierno sobre los ciudadanos?',
        'Rapidly embrace social reform and change vs. preserve cultural traditions and established institutions.':
            'Adoptar rápidamente la reforma y el cambio social frente a preservar las tradiciones culturales y las instituciones establecidas.',
        'Open borders and global solidarity vs. national sovereignty and cultural preservation first.':
            'Fronteras abiertas y solidaridad global frente a priorizar la soberanía nacional y la preservación cultural.',
        'Local community self-governance vs. unified national or supranational centralized authority.':
            'Autogobierno comunitario local frente a una autoridad centralizada nacional o supranacional unificada.',
        'Ecological limits and sustainability as primary concerns vs. economic growth and industrial output.':
            'Límites ecológicos y sostenibilidad como prioridad frente a crecimiento económico y producción industrial.',
        'Strict separation of church and state vs. governance derived from religious doctrine and values.':
            'Separación estricta entre iglesia y Estado frente a un gobierno basado en la doctrina y los valores religiosos.',
        'Diplomacy, non-intervention and disarmament vs. military strength and strategic foreign intervention.':
            'Diplomacia, no intervención y desarme frente a fuerza militar e intervención exterior estratégica.',
        'Cautious tech adoption at human scale vs. rapid innovation, disruption and transhumanist acceleration.':
            'Adopción tecnológica cautelosa a escala humana frente a innovación rápida, disrupción y aceleración transhumanista.',
        'Reform offenders and address root social causes vs. retribution, deterrence and strict sentencing.':
            'Rehabilitar a los infractores y atacar las causas sociales de fondo frente a castigo, disuasión y penas severas.',
        'Celebrate distinct, diverse cultural identities vs. integrating all citizens into a unified national culture.':
            'Celebrar identidades culturales diversas y diferenciadas frente a integrar a todos los ciudadanos en una cultura nacional unificada.',
        'Truth and social roles are socially constructed and fluid vs. truth and human nature are objectively inherent.':
            'La verdad y los roles sociales son construcciones sociales y fluidas frente a una verdad y una naturaleza humana objetivamente inherentes.',
    },
    'pt-BR': {
        'Copy Link': 'Copiar link',
        'Copied ✓': 'Copiado ✓',
        'Copy failed': 'Falha ao copiar',
        'Profiles': 'Perfis',
        '3D VIEW': 'VISÃO 3D',
        '2D VIEW': 'VISÃO 2D',
        '⚠ REFERENCE ONLY': '⚠ APENAS REFERÊNCIA',
        '12 axes': '12 eixos',
        'A playful reference tool — not a scientific, professional, or serious political assessment. All placements are impressionistic broad strokes.':
            'Uma ferramenta lúdica de referência; não é uma avaliação política científica, profissional nem séria. Todos os posicionamentos são traços amplos e impressionistas.',
        'LOAD PROFILE': 'CARREGAR PERFIL',
        '· select to auto-fill · for fun & reference, not a serious assessment': '· selecione para preencher automaticamente · por diversão e referência, não uma avaliação séria',
        '✕ CLOSE': '✕ FECHAR',
        'Search {n} profiles…': 'Pesquisar {n} perfis…',
        'Leaders': 'Líderes',
        'Historical': 'Históricos',
        'Thinkers': 'Pensadores',
        'Tech & Business': 'Tecnologia e negócios',
        'Anime': 'Anime',
        'Games': 'Games',
        'Film / TV': 'Cinema / TV',
        'ENFORCE ◄': 'IMPOR ◄',
        'SUGGEST ◄': 'SUGERIR ◄',
        'MIND ◄': 'IMPORTA ◄',
        "DON'T MIND": 'INDIFERENTE',
        'MIND ►': 'IMPORTA ►',
        'SUGGEST ►': 'SUGERIR ►',
        'ENFORCE ►': 'IMPOR ►',
        'SAME AS': 'IGUAL A',
        'ALMOST SAME AS': 'QUASE IGUAL A',
        'you would feel at home in': 'você se sentiria em casa em',
        'PROFILE:': 'PERFIL:',
        // Accessibility labels (aria-label on the chart and the profile search)
        '12-axis political compass chart': 'Gráfico de bússola política de 12 eixos',
        'Same as': 'Igual a',
        'Almost same as': 'Quase igual a',
        'You would feel at home in': 'Você se sentiria em casa em',
        'Search profiles': 'Buscar perfis',
        'ECONOMIC': 'ECONOMIA',
        'AUTHORITY': 'AUTORIDADE',
        'SOCIAL': 'SOCIAL',
        'IDENTITY': 'IDENTIDADE',
        'STATE POWER': 'PODER ESTATAL',
        'ECOLOGY': 'ECOLOGIA',
        'RELIGION': 'RELIGIÃO',
        'FGN POLICY': 'POL. EXTERNA',
        'TECHNOLOGY': 'TECNOLOGIA',
        'JUSTICE': 'JUSTIÇA',
        'ASSIMILATION': 'ASSIMILAÇÃO',
        'EPISTEMOLOGY': 'EPISTEMOLOGIA',
        'Collectivist': 'Coletivista',
        'Free Market': 'Livre mercado',
        'Civil Libertarian': 'Libertário civil',
        'Authoritarian': 'Autoritário',
        'Progressive': 'Progressista',
        'Traditional': 'Tradicional',
        'Internationalist': 'Internacionalista',
        'Nationalist': 'Nacionalista',
        'Decentral.': 'Descentral.',
        'Centralized': 'Centralizado',
        'Green': 'Ecologista',
        'Industrialist': 'Industrialista',
        'Secular': 'Laico',
        'Theocratic': 'Teocrático',
        'Pacifist': 'Pacifista',
        'Militarist': 'Militarista',
        'Precautionary': 'Cauteloso',
        'Accelerationist': 'Aceleracionista',
        'Rehabilitative': 'Reabilitador',
        'Punitive': 'Punitivo',
        'Multicultural': 'Multicultural',
        'Assimilationist': 'Assimilacionista',
        'Constructivist': 'Construtivista',
        'Essentialist': 'Essencialista',
        'Collective ownership & central planning vs. private property & free markets. How should resources be organized?':
            'Propriedade coletiva e planejamento central versus propriedade privada e livre mercado. Como os recursos devem ser organizados?',
        'Maximum personal freedom vs. strong state control. How much power should government hold over citizens?':
            'Máxima liberdade pessoal versus forte controle estatal. Quanto poder o governo deve ter sobre os cidadãos?',
        'Rapidly embrace social reform and change vs. preserve cultural traditions and established institutions.':
            'Adotar rapidamente reformas e mudanças sociais versus preservar tradições culturais e instituições estabelecidas.',
        'Open borders and global solidarity vs. national sovereignty and cultural preservation first.':
            'Fronteiras abertas e solidariedade global versus priorizar a soberania nacional e a preservação cultural.',
        'Local community self-governance vs. unified national or supranational centralized authority.':
            'Autogoverno comunitário local versus autoridade centralizada nacional ou supranacional unificada.',
        'Ecological limits and sustainability as primary concerns vs. economic growth and industrial output.':
            'Limites ecológicos e sustentabilidade como prioridade versus crescimento econômico e produção industrial.',
        'Strict separation of church and state vs. governance derived from religious doctrine and values.':
            'Separação estrita entre igreja e Estado versus governo baseado em doutrina e valores religiosos.',
        'Diplomacy, non-intervention and disarmament vs. military strength and strategic foreign intervention.':
            'Diplomacia, não intervenção e desarmamento versus força militar e intervenção externa estratégica.',
        'Cautious tech adoption at human scale vs. rapid innovation, disruption and transhumanist acceleration.':
            'Adoção tecnológica cautelosa em escala humana versus inovação rápida, disrupção e aceleração transumanista.',
        'Reform offenders and address root social causes vs. retribution, deterrence and strict sentencing.':
            'Reabilitar infratores e atacar as causas sociais de fundo versus retribuição, dissuasão e penas severas.',
        'Celebrate distinct, diverse cultural identities vs. integrating all citizens into a unified national culture.':
            'Celebrar identidades culturais diversas e distintas versus integrar todos os cidadãos em uma cultura nacional unificada.',
        'Truth and social roles are socially constructed and fluid vs. truth and human nature are objectively inherent.':
            'A verdade e os papéis sociais são construções sociais e fluidas versus uma verdade e uma natureza humana objetivamente inerentes.',
    },
    ja: {
        'Copy Link': 'リンクをコピー',
        'Copied ✓': 'コピーしました ✓',
        'Copy failed': 'コピーに失敗',
        'Profiles': 'プロフィール',
        '3D VIEW': '3D表示',
        '2D VIEW': '2D表示',
        '⚠ REFERENCE ONLY': '⚠ 参考用',
        '12 axes': '12軸',
        'A playful reference tool — not a scientific, professional, or serious political assessment. All placements are impressionistic broad strokes.':
            '遊び心のある参考ツールです。科学的・専門的・本格的な政治診断ではありません。配置はすべて大まかな印象によるものです。',
        'LOAD PROFILE': 'プロフィールを読み込む',
        '· select to auto-fill · for fun & reference, not a serious assessment': '· 選択で自動入力 · お遊び・参考用であり、本格的な診断ではありません',
        '✕ CLOSE': '✕ 閉じる',
        'Search {n} profiles…': '{n}件のプロフィールを検索…',
        'Leaders': 'リーダー',
        'Historical': '歴史上の人物',
        'Thinkers': '思想家',
        'Tech & Business': 'テック・ビジネス',
        'Anime': 'アニメ',
        'Games': 'ゲーム',
        'Film / TV': '映画・TV',
        'ENFORCE ◄': '強制 ◄',
        'SUGGEST ◄': '提案 ◄',
        'MIND ◄': '気にする ◄',
        "DON'T MIND": '気にしない',
        'MIND ►': '気にする ►',
        'SUGGEST ►': '提案 ►',
        'ENFORCE ►': '強制 ►',
        'SAME AS': '一致:',
        'ALMOST SAME AS': 'ほぼ一致:',
        'you would feel at home in': 'あなたに合う国：',
        'PROFILE:': 'プロフィール:',
        // Accessibility labels (aria-label on the chart and the profile search)
        '12-axis political compass chart': '12軸の政治コンパス図',
        'Same as': '一致するのは',
        'Almost same as': 'ほぼ一致するのは',
        'You would feel at home in': 'あなたに合う国は',
        'Search profiles': 'プロフィールを検索',
        'ECONOMIC': '経済',
        'AUTHORITY': '権威',
        'SOCIAL': '社会',
        'IDENTITY': 'アイデンティティ',
        'STATE POWER': '国家権力',
        'ECOLOGY': '環境',
        'RELIGION': '宗教',
        'FGN POLICY': '外交',
        'TECHNOLOGY': '技術',
        'JUSTICE': '司法',
        'ASSIMILATION': '同化',
        'EPISTEMOLOGY': '認識論',
        'Collectivist': '集産主義',
        'Free Market': '自由市場',
        'Civil Libertarian': '市民的自由',
        'Authoritarian': '権威主義',
        'Progressive': '進歩主義',
        'Traditional': '伝統主義',
        'Internationalist': '国際主義',
        'Nationalist': '国家主義',
        'Decentral.': '地方分権',
        'Centralized': '中央集権',
        'Green': '環境重視',
        'Industrialist': '産業重視',
        'Secular': '世俗主義',
        'Theocratic': '神権政治',
        'Pacifist': '平和主義',
        'Militarist': '軍事主義',
        'Precautionary': '慎重派',
        'Accelerationist': '加速主義',
        'Rehabilitative': '更生重視',
        'Punitive': '厳罰主義',
        'Multicultural': '多文化主義',
        'Assimilationist': '同化主義',
        'Constructivist': '構築主義',
        'Essentialist': '本質主義',
        'Collective ownership & central planning vs. private property & free markets. How should resources be organized?':
            '集団所有と中央計画か、私有財産と自由市場か。資源はどう組織されるべきか？',
        'Maximum personal freedom vs. strong state control. How much power should government hold over citizens?':
            '最大限の個人の自由か、強力な国家統制か。政府は国民にどれだけの権力を持つべきか？',
        'Rapidly embrace social reform and change vs. preserve cultural traditions and established institutions.':
            '社会改革と変化を素早く受け入れるか、文化的伝統と既存の制度を守るか。',
        'Open borders and global solidarity vs. national sovereignty and cultural preservation first.':
            '開かれた国境と世界的連帯か、国家主権と文化の保護を優先するか。',
        'Local community self-governance vs. unified national or supranational centralized authority.':
            '地域コミュニティの自治か、国家・超国家レベルの統一された中央集権か。',
        'Ecological limits and sustainability as primary concerns vs. economic growth and industrial output.':
            '生態系の限界と持続可能性を最優先するか、経済成長と工業生産を優先するか。',
        'Strict separation of church and state vs. governance derived from religious doctrine and values.':
            '政教分離の徹底か、宗教の教義と価値観に基づく統治か。',
        'Diplomacy, non-intervention and disarmament vs. military strength and strategic foreign intervention.':
            '外交・不干渉・軍縮か、軍事力と戦略的な対外介入か。',
        'Cautious tech adoption at human scale vs. rapid innovation, disruption and transhumanist acceleration.':
            '人間の尺度に合わせた慎重な技術導入か、急速なイノベーション・破壊・トランスヒューマニズム的加速か。',
        'Reform offenders and address root social causes vs. retribution, deterrence and strict sentencing.':
            '犯罪者の更生と社会的な根本原因への対処か、報復・抑止・厳罰か。',
        'Celebrate distinct, diverse cultural identities vs. integrating all citizens into a unified national culture.':
            '多様で独自の文化的アイデンティティを尊重するか、全国民を統一された国民文化に統合するか。',
        'Truth and social roles are socially constructed and fluid vs. truth and human nature are objectively inherent.':
            '真理や社会的役割は社会的に構築され流動的か、それとも真理と人間性は客観的に内在するものか。',
    },
    ru: {
        'Copy Link': 'Копировать ссылку',
        'Copied ✓': 'Скопировано ✓',
        'Copy failed': 'Не удалось скопировать',
        'Profiles': 'Профили',
        '3D VIEW': '3D-ВИД',
        '2D VIEW': '2D-ВИД',
        '⚠ REFERENCE ONLY': '⚠ ТОЛЬКО ДЛЯ СПРАВКИ',
        '12 axes': '12 осей',
        'A playful reference tool — not a scientific, professional, or serious political assessment. All placements are impressionistic broad strokes.':
            'Шуточный справочный инструмент — не научная, профессиональная или серьёзная политическая оценка. Все позиции — общие импрессионистские мазки.',
        'LOAD PROFILE': 'ЗАГРУЗИТЬ ПРОФИЛЬ',
        '· select to auto-fill · for fun & reference, not a serious assessment': '· выберите для автозаполнения · ради интереса и справки, не серьёзная оценка',
        '✕ CLOSE': '✕ ЗАКРЫТЬ',
        'Search {n} profiles…': 'Поиск по {n} профилям…',
        'Leaders': 'Лидеры',
        'Historical': 'Исторические',
        'Thinkers': 'Мыслители',
        'Tech & Business': 'Технологии и бизнес',
        'Anime': 'Аниме',
        'Games': 'Игры',
        'Film / TV': 'Кино / ТВ',
        'ENFORCE ◄': 'ПРИНУЖДАТЬ ◄',
        'SUGGEST ◄': 'ПРЕДЛАГАТЬ ◄',
        'MIND ◄': 'ВАЖНО ◄',
        "DON'T MIND": 'ВСЁ РАВНО',
        'MIND ►': 'ВАЖНО ►',
        'SUGGEST ►': 'ПРЕДЛАГАТЬ ►',
        'ENFORCE ►': 'ПРИНУЖДАТЬ ►',
        'SAME AS': 'КАК',
        'ALMOST SAME AS': 'ПОЧТИ КАК',
        'you would feel at home in': 'вы бы чувствовали себя как дома:',
        'PROFILE:': 'ПРОФИЛЬ:',
        // Accessibility labels (aria-label on the chart and the profile search)
        '12-axis political compass chart': 'Диаграмма политического компаса с 12 осями',
        'Same as': 'Совпадает с',
        'Almost same as': 'Почти совпадает с',
        'You would feel at home in': 'Вы бы чувствовали себя как дома в стране',
        'Search profiles': 'Поиск профилей',
        'ECONOMIC': 'ЭКОНОМИКА',
        'AUTHORITY': 'ВЛАСТЬ',
        'SOCIAL': 'СОЦИАЛЬНОЕ',
        'IDENTITY': 'ИДЕНТИЧНОСТЬ',
        'STATE POWER': 'ГОСВЛАСТЬ',
        'ECOLOGY': 'ЭКОЛОГИЯ',
        'RELIGION': 'РЕЛИГИЯ',
        'FGN POLICY': 'ВНЕШ. ПОЛИТИКА',
        'TECHNOLOGY': 'ТЕХНОЛОГИИ',
        'JUSTICE': 'ПРАВОСУДИЕ',
        'ASSIMILATION': 'АССИМИЛЯЦИЯ',
        'EPISTEMOLOGY': 'ЭПИСТЕМОЛОГИЯ',
        'Collectivist': 'Коллективизм',
        'Free Market': 'Свободный рынок',
        'Civil Libertarian': 'Гражд. свободы',
        'Authoritarian': 'Авторитаризм',
        'Progressive': 'Прогрессивизм',
        'Traditional': 'Традиционализм',
        'Internationalist': 'Интернационализм',
        'Nationalist': 'Национализм',
        'Decentral.': 'Децентрал.',
        'Centralized': 'Централизация',
        'Green': 'Экологизм',
        'Industrialist': 'Индустриализм',
        'Secular': 'Секуляризм',
        'Theocratic': 'Теократия',
        'Pacifist': 'Пацифизм',
        'Militarist': 'Милитаризм',
        'Precautionary': 'Осторожность',
        'Accelerationist': 'Акселерационизм',
        'Rehabilitative': 'Реабилитация',
        'Punitive': 'Наказание',
        'Multicultural': 'Мультикультурализм',
        'Assimilationist': 'Ассимиляционизм',
        'Constructivist': 'Конструктивизм',
        'Essentialist': 'Эссенциализм',
        'Collective ownership & central planning vs. private property & free markets. How should resources be organized?':
            'Коллективная собственность и централизованное планирование против частной собственности и свободного рынка. Как должны быть организованы ресурсы?',
        'Maximum personal freedom vs. strong state control. How much power should government hold over citizens?':
            'Максимальная личная свобода против жёсткого государственного контроля. Сколько власти над гражданами должно быть у государства?',
        'Rapidly embrace social reform and change vs. preserve cultural traditions and established institutions.':
            'Быстро принимать социальные реформы и перемены или сохранять культурные традиции и устоявшиеся институты.',
        'Open borders and global solidarity vs. national sovereignty and cultural preservation first.':
            'Открытые границы и глобальная солидарность или национальный суверенитет и сохранение культуры прежде всего.',
        'Local community self-governance vs. unified national or supranational centralized authority.':
            'Местное самоуправление сообществ или единая национальная либо наднациональная централизованная власть.',
        'Ecological limits and sustainability as primary concerns vs. economic growth and industrial output.':
            'Экологические ограничения и устойчивость как приоритет или экономический рост и промышленное производство.',
        'Strict separation of church and state vs. governance derived from religious doctrine and values.':
            'Строгое отделение церкви от государства или управление на основе религиозной доктрины и ценностей.',
        'Diplomacy, non-intervention and disarmament vs. military strength and strategic foreign intervention.':
            'Дипломатия, невмешательство и разоружение или военная мощь и стратегические интервенции за рубежом.',
        'Cautious tech adoption at human scale vs. rapid innovation, disruption and transhumanist acceleration.':
            'Осторожное внедрение технологий в человеческом масштабе или быстрые инновации, дизрупция и трансгуманистическое ускорение.',
        'Reform offenders and address root social causes vs. retribution, deterrence and strict sentencing.':
            'Исправление правонарушителей и работа с корневыми социальными причинами или возмездие, устрашение и суровые приговоры.',
        'Celebrate distinct, diverse cultural identities vs. integrating all citizens into a unified national culture.':
            'Ценить самобытные, разнообразные культурные идентичности или интегрировать всех граждан в единую национальную культуру.',
        'Truth and social roles are socially constructed and fluid vs. truth and human nature are objectively inherent.':
            'Истина и социальные роли социально сконструированы и изменчивы — или истина и человеческая природа объективно присущи.',
    },
};

let LOCALE = 'en';

function setLocale(l) {
    LOCALE = (l === 'en' || I18N[l]) ? l : 'en';
    document.documentElement.lang = LOCALE;
}

function t(key) {
    const dict = I18N[LOCALE];
    return (dict && dict[key]) || key;
}

// Static markup: elements carrying data-i18n use their original English text
// as the key (captured on first pass so locale switches stay reversible).
function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim();
        el.textContent = t(el.dataset.i18nKey);
    });
}

// ── Safe wraps of the app's global display helpers (classic-script function
//    declarations, so they live on window). Pure t() wraps — no logic changes.
let I18N_PATCHED = false;
function patchAppHelpers() {
    if (I18N_PATCHED) return;
    I18N_PATCHED = true;

    if (typeof window.posLabel === 'function') {
        const _pl = window.posLabel;
        window.posLabel = (v) => t(_pl(v));
    }
    if (typeof window.matchLabel === 'function') {
        const _ml = window.matchLabel;
        window.matchLabel = (d) => t(_ml(d));
    }
    // "you would feel at home in 🇸🇪 SWEDEN" header hint (country names stay English)
    if (typeof window.nearestCountry === 'function' && typeof window.refreshHome === 'function') {
        window.refreshHome = function () {
            const el = document.getElementById('home-hint');
            if (!el || el.classList.contains('flash')) return;
            const c = window.nearestCountry();
            el.textContent = c ? t('you would feel at home in') + ' ' + c.flag + ' ' + c.name.toUpperCase() : '';
        };
    }
    // Axis info bar: original writes 'NAME: description' — re-translate both parts.
    if (typeof window.setInfo === 'function') {
        const _si = window.setInfo;
        window.setInfo = function (idx) {
            _si(idx);
            if (idx >= 0) {
                const el = document.getElementById('axis-info');
                const raw = el.textContent;
                const cut = raw.indexOf(': ');
                if (cut > 0) el.textContent = t(raw.slice(0, cut)) + ': ' + t(raw.slice(cut + 2));
            }
        };
    }
    // 2D/3D toggle sets its own English label — re-translate after each toggle.
    if (typeof window.toggle3D === 'function') {
        const _tg = window.toggle3D;
        window.toggle3D = function () {
            _tg();
            const b = document.getElementById('btn-3d');
            if (b) b.textContent = t(b.textContent.trim());
        };
    }
    // Copy button feedback ('Copied ✓' / 'Copy failed' / reset to 'Copy Link').
    if (typeof window.copyLink === 'function') {
        window.copyLink = function () {
            const btn = document.getElementById('btn-copy');
            const done = (ok) => {
                btn.textContent = ok ? t('Copied ✓') : t('Copy failed');
                setTimeout(() => { btn.textContent = t('Copy Link'); }, 1600);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(location.href).then(() => done(true), () => done(false));
            } else done(false);
        };
    }
    // Chart aria-label: refreshMatch rebuilds it from English fragments on every
    // update, so re-emit it through t() afterwards (profile/country names stay).
    if (typeof window.refreshMatch === 'function' && typeof window.closestProfiles === 'function') {
        const _rm = window.refreshMatch;
        window.refreshMatch = function () {
            _rm();
            const rc = document.getElementById('rc');
            if (!rc) return;
            const { hist, histD } = window.closestProfiles();
            const home = (typeof window.nearestCountry === 'function') ? window.nearestCountry() : null;
            rc.setAttribute('aria-label',
                t('12-axis political compass chart') + '.'
                + (hist ? ' ' + t(histD <= 6 ? 'Same as' : 'Almost same as') + ' ' + hist.name.replace(/\.$/, '') + '.' : '')
                + (home ? ' ' + t('You would feel at home in') + ' ' + home.name + '.' : ''));
        };
    }
    // 'PROFILE: NAME' flash after loading a profile (name stays as-is).
    if (typeof window.loadProfile === 'function') {
        const _lp = window.loadProfile;
        window.loadProfile = function (name, profileVals) {
            _lp(name, profileVals);
            const hint = document.getElementById('home-hint');
            if (hint && hint.classList.contains('flash')) {
                hint.textContent = t('PROFILE:') + ' ' + name.toUpperCase();
            }
        };
    }
}

// ── JS-built DOM (sliders, tabs) — same capture-key pattern as data-i18n.
function applyDynamicI18n() {
    // Chart aria-label base text. The patched refreshMatch below replaces this
    // with the full "…. Same as X. You would feel at home in Y." sentence; this
    // line is what a browser reads before the first refresh (and the fallback
    // if the app script's refreshMatch is missing).
    const rc = document.getElementById('rc');
    if (rc) rc.setAttribute('aria-label', t('12-axis political compass chart'));
    // Profile search box aria-label (its placeholder is handled further down)
    const profSearch = document.getElementById('prof-search');
    if (profSearch) profSearch.setAttribute('aria-label', t('Search profiles'));
    // Slider pole labels + axis names
    document.querySelectorAll('.pole, .ax-name').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim();
        el.textContent = t(el.dataset.i18nKey);
    });
    // Axis tooltips (title = description sentence)
    document.querySelectorAll('.an[title]').forEach((el) => {
        if (!el.dataset.i18nTitle) el.dataset.i18nTitle = el.title;
        el.title = t(el.dataset.i18nTitle);
    });
    // Warning chip tooltip
    const chip = document.querySelector('.warn-chip');
    if (chip && chip.title) {
        if (!chip.dataset.i18nTitle) chip.dataset.i18nTitle = chip.title;
        chip.title = t(chip.dataset.i18nTitle);
    }
    // Live position labels ("MIND ►" …) via the patched posLabel
    if (typeof window.updateRow === 'function') {
        const rows = document.querySelectorAll('.slider-rows .ax').length;
        for (let i = 0; i < rows; i++) window.updateRow(i);
    }
    // Header match + home hints via the patched matchLabel / refreshHome
    if (typeof window.refreshMatch === 'function') window.refreshMatch();
    // 2D/3D button (text depends on current mode; every locale keeps '2D'/'3D')
    const b3 = document.getElementById('btn-3d');
    if (b3) b3.textContent = b3.textContent.includes('2D') ? t('2D VIEW') : t('3D VIEW');
    // Profile tab labels (first text node; the <small> count stays)
    document.querySelectorAll('.prof-tab').forEach((btn) => {
        const tn = btn.childNodes[0];
        if (tn && tn.nodeType === 3) {
            if (!btn.dataset.i18nKey) btn.dataset.i18nKey = tn.nodeValue.trim();
            tn.nodeValue = t(btn.dataset.i18nKey);
        }
    });
    // Search placeholder 'Search N profiles…' (capture N from the English original)
    const search = document.getElementById('prof-search');
    if (search && search.placeholder) {
        if (!search.dataset.i18nCount) {
            const m = search.placeholder.match(/\d+/);
            search.dataset.i18nCount = m ? m[0] : '';
        }
        search.placeholder = t('Search {n} profiles…').replace('{n}', search.dataset.i18nCount);
    }
}

// ── Fleet wiring: carino-lang.js resolves the language and fires langchange.
function currentFleetLang() { return (window.CarinoLang && window.CarinoLang.current) || 'en'; }

function applyI18n() {
    setLocale(currentFleetLang());
    patchAppHelpers();
    applyStaticI18n();
    applyDynamicI18n();
}

document.addEventListener('DOMContentLoaded', applyI18n);
window.addEventListener('carino:langchange', applyI18n);
