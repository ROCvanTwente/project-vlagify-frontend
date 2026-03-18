export const products = [
  // Custom Flag Configurator
  {
    id: 'custom-flag',
    name: 'Maak je eigen vlag',
    category: 'vlaggen',
    price: 49.95,
    description: 'Ontwerp je eigen unieke vlag met onze configurator. Upload je ontwerp en kies uit verschillende formaten en materialen.',
    image: 'https://images.unsplash.com/photo-1672332147106-80905f538ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkZXNpZ24lMjBmbGFnJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwNzI2NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 999,
    flagType: 'custom',
    dimensions: { width: 150, height: 100, unit: 'cm' }
  },
  // Vlaggen (Flags)
  {
    id: '1',
    name: 'Nederlandse Vlag',
    category: 'vlaggen',
    price: 24.95,
    description: 'Officiële Nederlandse vlag van hoogwaardige kwaliteit. Gemaakt van duurzaam polyester materiaal, geschikt voor binnen- en buitengebruik.',
    image: 'https://images.unsplash.com/photo-1629208485132-6e9440cb7769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXRjaCUyMGZsYWclMjB3YXZpbmd8ZW58MXx8fHwxNzcwNzIxNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 45,
    country: 'Nederland',
    attachmentMethod: 'ring',
    flagType: 'country',
    dimensions: { width: 150, height: 100, unit: 'cm' }
  },
  {
    id: '2',
    name: 'Belgische Vlag',
    category: 'vlaggen',
    price: 24.95,
    description: 'Belgische vlag in standaard formaat. Hoge kwaliteit polyester met dubbel gestikt randje voor extra duurzaamheid.',
    image: 'https://images.unsplash.com/photo-1663697697070-13f1502bd6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxnaXVtJTIwZmxhZ3xlbnwxfHx8fDE3NzA3MTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 32,
    country: 'België',
    attachmentMethod: 'tunnel',
    flagType: 'country',
    dimensions: { width: 150, height: 100, unit: 'cm' }
  },
  {
    id: '3',
    name: 'Duitse Vlag',
    category: 'vlaggen',
    price: 24.95,
    description: 'Duitse vlag van premium kwaliteit. UV-bestendig en weerbestendig materiaal voor langdurig gebruik.',
    image: 'https://images.unsplash.com/photo-1663493955721-110e7e1ae36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBmbGFnfGVufDF8fHx8MTc3MDcyMTczM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 28,
    country: 'Duitsland',
    attachmentMethod: 'ring',
    flagType: 'country',
    dimensions: { width: 150, height: 100, unit: 'cm' }
  },
  {
    id: '4',
    name: 'Europese Unie Vlag',
    category: 'vlaggen',
    price: 27.95,
    description: 'EU vlag met 12 gouden sterren. Perfect voor bedrijven en overheidsgebouwen.',
    image: 'https://images.unsplash.com/photo-1668120084348-efc2ba0ad31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZmxhZ3MlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MDcyMTczMnww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 22,
    country: 'EU',
    attachmentMethod: 'rope',
    flagType: 'country',
    dimensions: { width: 150, height: 100, unit: 'cm' }
  },
  {
    id: '17',
    name: 'Franse Vlag',
    category: 'vlaggen',
    price: 24.95,
    description: 'Klassieke Franse vlag in blauw, wit en rood. Hoogwaardige kwaliteit polyester, UV-bestendig en geschikt voor binnen- en buitengebruik. Verwacht weer op voorraad in maart 2026.',
    image: 'https://images.unsplash.com/photo-1663493955721-110e7e1ae36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBmbGFnfGVufDF8fHx8MTc3MDcyMTczM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 0,
    country: 'Frankrijk',
    attachmentMethod: 'ring',
    flagType: 'country',
    dimensions: { width: 150, height: 100, unit: 'cm' }
  },
  
  // Wimpels (Pennants)
  {
    id: '5',
    name: 'Vlaggenlijn Gekleurd',
    category: 'wimpels',
    price: 15.95,
    description: 'Vrolijke vlaggenlijn met verschillende kleuren. 10 meter lang, ideaal voor feesten en evenementen.',
    image: 'https://images.unsplash.com/photo-1521336414296-fd11b19da2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5uYW50JTIwZmxhZ3N8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 67,
    flagType: 'festival',
    dimensions: { width: 10, height: 0.2, unit: 'm' }
  },
  {
    id: '6',
    name: 'Oranje Wimpels',
    category: 'wimpels',
    price: 12.95,
    description: 'Oranje wimpellijn speciaal voor Koningsdag en EK/WK voetbal. 8 meter lang met 20 wimpels.',
    image: 'https://images.unsplash.com/photo-1521336414296-fd11b19da2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5uYW50JTIwZmxhZ3N8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 89,
    flagType: 'sport',
    dimensions: { width: 8, height: 0.2, unit: 'm' }
  },
  {
    id: '7',
    name: 'Regenboog Wimpels',
    category: 'wimpels',
    price: 14.95,
    description: 'Regenboog vlaggenlijn voor Pride evenementen. Kleurecht en weerbestendig.',
    image: 'https://images.unsplash.com/photo-1521336414296-fd11b19da2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5uYW50JTIwZmxhZ3N8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 54,
    flagType: 'festival',
    dimensions: { width: 10, height: 0.2, unit: 'm' }
  },
  
  // Vlaggenmasten (Flag Poles)
  {
    id: '8',
    name: 'Vlaggenmast 6 meter',
    category: 'vlaggenmasten',
    price: 189.95,
    description: 'Aluminium vlaggenmast van 6 meter hoog. Inclusief grondanker en takel systeem. Geschikt voor vlaggen tot 150x225cm.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 15,
    bundleItems: ['14', '15'],
    dimensions: { width: 6, height: 0.5, unit: 'm' }
  },
  {
    id: '9',
    name: 'Vlaggenmast 8 meter',
    category: 'vlaggenmasten',
    price: 249.95,
    description: 'Professionele vlaggenmast van 8 meter. Extra stevig en winddoorlatend. Inclusief montage materiaal.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 8,
    bundleItems: ['14', '15', '16'],
    dimensions: { width: 8, height: 0.6, unit: 'm' }
  },
  {
    id: '10',
    name: 'Telescopische Vlaggenmast',
    category: 'vlaggenmasten',
    price: 299.95,
    description: 'Verstelbare telescopische mast van 4-7 meter. Eenvoudig te installeren en verplaatsbaar.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 12,
    bundleItems: ['14', '16'],
    dimensions: { width: 7, height: 0.5, unit: 'm' }
  },
  
  // Vlaggenstokken (Flag Sticks)
  {
    id: '11',
    name: 'Houten Vlaggestok 120cm',
    category: 'vlaggenstokken',
    price: 8.95,
    description: 'Klassieke houten vlaggestok van 120cm. Inclusief kunststof vlaggendop.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 156,
    dimensions: { width: 120, height: 2, unit: 'cm' }
  },
  {
    id: '12',
    name: 'Aluminium Vlaggestok 150cm',
    category: 'vlaggenstokken',
    price: 12.95,
    description: 'Lichtgewicht aluminium vlaggestok. Roestvrij en duurzaam voor langdurig gebruik.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 123,
    dimensions: { width: 150, height: 2.5, unit: 'cm' }
  },
  {
    id: '13',
    name: 'Set van 10 Mini Vlaggestokken',
    category: 'vlaggenstokken',
    price: 9.95,
    description: 'Set van 10 mini vlaggestokken van 30cm. Perfect voor op bureau of voor kinderen.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 78,
    dimensions: { width: 30, height: 1, unit: 'cm' }
  },
  
  // Bundle/Accessory items
  {
    id: '14',
    name: 'Grondanker Set',
    category: 'vlaggenstokken',
    price: 34.95,
    description: 'Professionele grondanker set voor vlaggenmasten. Inclusief betonplug en bouten.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 45
  },
  {
    id: '15',
    name: 'Takel Systeem',
    category: 'vlaggenstokken',
    price: 24.95,
    description: 'Hoogwaardig takel systeem voor eenvoudig hijsen van vlaggen. Roestvrij materiaal.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 67
  },
  {
    id: '16',
    name: 'Windvaan Ornament',
    category: 'vlaggenstokken',
    price: 19.95,
    description: 'Decoratief windvaan ornament voor aan de top van uw vlaggenmast.',
    image: 'https://images.unsplash.com/photo-1605737689179-5b24d59c3faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFnJTIwcG9sZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNzIxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 34
  }
];
