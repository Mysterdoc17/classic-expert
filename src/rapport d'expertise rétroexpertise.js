var dd = {
        pageSize: 'A4',
        info : {
            title : 'Classic Expert',
        },
        header: function(currentPage, pageCount) {
            return [
                {
                    stack:
                            [
                                {
                                    text: 'Header',
                                    style: 'header'
                                },
                                {
                                    text: 'Page '+currentPage+'/'+pageCount,
                                    style: 'headerRight'
                                }
                            ]
                },
                {
                    canvas: [
                        {
                            type: 'line', x1: 35, y1: 5, x2: 595-2*20, y2: 5, lineWidth: 1
                        }
                    ]
                }
            ]
          },
          footer: function(currentPage, pageCount) {
            return [
                {
                    canvas: [
                        {
                            type: 'line', x1: 35, y1: -30, x2: 595-2*20, y2: -30, lineWidth: 1
                        }
                    ]
                },
                {
                    stack:
                            [
                                {
                                    text: 'Footer',
                                    style: 'footer'
                                },
                                {
                                    text: 'Page '+currentPage+'/'+pageCount,
                                    alignment: 'right',
                                    style: 'footerRight'
                                }
                            ]
                }
            ]
          },
    content: [
        {
            text: 'rapport d\'expertise et rétroexpertise',
            style: 'header',
             alignment: 'center'
        },
        {
            text: "",
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'renseignements', colSpan: 2, style: 'title',
                             alignment: 'center',
                        },
                        '', 
                    ],
                    [{
                        text: 'référence BCA:',
                       colSpan: 2, 
                    }, 
                    ''],
                    [
                        {text: 'agence BCA:', colSpan: 2},''
                        ],
                    [
                        {text: 'expert:', colSpan: 2},
                        '', 

                    ],
                    [
                        {text: 'date du rapport:', colSpan: 2},
                        ''
                    ],
                ]
            }
        },
        {
            text: "",
            margin: [
                0,
                20
                ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    
                    [
                        {
                            text: 'client',
                            colSpan: 2, style: 'title',
                             alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'état civil',
                        ''
                    ],
                    [
                        'Nom / Prénom',
                        ''
                    ],
                    [
                        'adresse',
                        ''
                    ],
                ]
            }
        },
        {
            text: "",
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'propriétaire',
                            colSpan: 2, style: 'title',
                             alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'état civil',
                        ''
                    ],
                    [
                        'Nom/Prénom',
                        ''
                    ],
                    [
                        'adresse',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
                ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'examen',
                            colSpan: 2, style: 'title',
                             alignment: 'center' 
                        },
                        ''
                    ],
                    [
                        'lieu',
                        ''
                    ],
                    [
                        'date',
                        ''
                    ],
                    [
                        'personnes présentes',
                        ''
                    ],
                    [
                        'condition',
                        ''
                    ],
                    [
                        'origine de la mission',
                        ''
                    ],
                ]
            }
        },
        {
            text: "",
            margin: [
                0,
                10
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'identification du véhicule',
                            colSpan: 2, style: 'title',
                             alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'marque',
                        ''
                    ],
                    [
                        'modèle',
                        ''
                    ],
                    [
                        'Finition',
                        ''
                    ],
                    [
                        'immatriculation',
                        ''
                    ],
                    [
                        'date de première mise en circulation',
                        'JJ/MM/AAAA'
                    ],
                    [
                        'date de certificat d\'immatriculation',
                        'JJ/MM/AAAA'
                    ],
                    [
                        'type',
                        'normale / collection'
                    ],
                    [
                        'type mines',
                        ''
                    ],
                    [
                        'numéro de série',
                        ''
                    ],
                    [
                        'numéro du moteur',
                        ''
                    ],
                    [
                        'genre',
                        ''
                    ],
                    [
                        'carrosserie',
                        ''
                    ],
                    [
                        {
                            text: 'puissance',
                            colSpan: 2, style: 'title',
                             alignment: 'center'
                        },
                        ''
                    ],
                    [ 
                        'réelle/fiscale',
                        ''
                    ],
                    [
                        'énergie',
                        ''
                    ],
                    [
                        {
                            text: 'couleur',
                            colSpan: 2, style: 'title',
                             alignment: 'center',
                        },
                        ''
                    ],
                    [
                        'teinte',
                        ''
                    ],
                    [
                        'type',
                        ''
                    ],
                    [
                        {
                            text: 'compteur',
                            colSpan: 2, style: 'title',
                             alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'relevé',
                        ''
                    ],
                    [
                        'unité',
                        ''
                    ],
                    [
                        'cohérent',
                        ''
                    ],
                ]
            },
        },
        {
            text: "",
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        'frappe à froid',
                        ''
                    ],
                    [
                        'plaque constructeur',
                        ''
                    ],
                    [
                        'compteur',
                        ''
                    ],
                    [
                        'certificat d\'immatriculation',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'documents et éléments administratifs',
                            colSpan: 3, style: 'title',
                            alignment: 'center'
                    },
                        '',
                        ''
                    ],
                    [
                        'certificat d\'immatriculation',
                        'oui / non',
                        ''
                    ],
                    [
                        'certificat de situation (-15j)',
                        'oui / non',
                        ''
                    ],
                    [
                        'facture d\'achat',
                        'oui / non',
                        ''
                    ],
                    [
                        'carnet d\'entretien',
                        'oui / non',
                        ''
                    ],
                    [
                        'notice d\'utilisation',
                        'oui / non',
                        ''
                    ],
                    [
                        'facture d\'entretien',
                        'oui / non',
                        ''
                    ],
                    [
                        'dossier de restauration',
                        'oui / non',
                        ''
                    ],
                    [
                        'double de clés',
                        'oui / non',
                        ''
                    ],
                    [
                        'contrôle technique',
                        'oui / non',
                        ''
                    ],
                    [
                        'défaut CT',
                        'oui / non',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'documents',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    ['', ''],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'état du véhicule',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['20%', '20%', '20%', '20%', '20%'],
                body: [
                    [
                        '','bien','moyen','mal','non acceptable',
                    ],
                    [
                        'conformité administrative',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'historique',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'carrosserie',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'peinture',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'mécanique',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'sellerie',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'véhicule complet',
                        '',
                        '',
                        '',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'photo générale',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    ['', ''],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'historique du modèle',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'pas de copier / coller Wikipédia',
                        ''
                    ],
                    [
                        {
                            text: 'historique entretien / réparation / restauration',
                            colSpan: 2,
                            alignment: 'center' 
                        },
                        ''
                    ],
                    ['', ''],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['20%', '20%', '20%', '20%', '20%'],
                body: [
                    [
                        {
                            text: 'pneumatiques',
                            colSpan: 5, style: 'title',
                            alignment: 'center'                            
                        },
                        'roue de secours',
                        '',
                        '',
                        ''
                    ],
                    [
                        'AVD',
                        'AVG',
                        'ARD',
                        'ARG',
                        'Absent / équipé'
                    ],
                    [
                        'marque',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'modèle',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'largeur',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'hauteur',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'diamètre',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'date de fabrication',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'charge',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'vitesse',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'taux d\'usure',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'état',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
                            colSpan: 5, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                    ],
                    ['', '', '', '', ''],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                body: [
                    [
                        {
                            text: 'jantes / enjoliveurs',
                            colSpan: 6, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        '',
                        'AVD',
                        'AVG',
                        'ARD',
                        'ARG',
                        ''
                    ],
                    [
                        'type',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'état',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
                            colSpan: 6, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    ['', '', '', '', '', ''],

                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [
                        {
                            text: 'carrosserie',
                            colSpan: 4, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                    ],
                    [
                        {
                            text: '',
                            colSpan : 2
                        },
                        '',
                        'LOCALISATION',
                        'OBSERVATIONS'
                    ],
                    [
                        'Rayures',
                        'oui / non',
                        '',
                        ''
                    ],
                    [
                        'enfoncement',
                        'oui / non',
                        '',
                        ''
                    ],
                    [
                        'présence de mastic',
                        'oui / non',
                        '',
                        ''
                    ],
                    [
                        'corrosion apparente',
                        'oui / non',
                        '',
                        ''
                    ],
                    [
                        'corrosion perforante',
                        'oui / non',
                        '',
                        ''
                    ],
                    [
                        'traces de réparation',
                        'oui / non',
                        '',
                        ''
                    ],
                    [
                        'alignment des éléments',
                        'bon / mauvais',
                        '',
                        ''
                    ],
                    [
                        'état des planchers',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'état des bas de caisse',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'état des joints',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'état des chromes',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'état de la capote',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'présence du hard top',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'rétroviseurs',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'essuie - glace',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'pièces manquantes (chromes PC, enjoliveurs)',
                        {
                            text: '',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'peinture',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'code teinte',
                        'oui / non',
                        ''
                    ],
                    [
                        'différence de teinte',
                        'oui / non',
                        ''
                    ],
                    [
                        'cloques apparentes',
                        'oui / non',
                        ''
                    ],
                    [
                        'peinture craquelée',
                        'oui / non',
                        ''
                    ],
                    [
                        'pièces manquantes (chromes, PC, enjoliveurs...)',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        '',
                        '',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        'autres',
                        'autres'
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [ 
                    [
                        {
                            text: 'mécanique',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'niveaux',
                            colSpan: 3, style: 'title'
                        },
                        '',
                        ''
                    ],
                    [
                        'huile moteur',
                        '',
                        ''
                    ],
                    [
                        'liquide de refroidissement',
                        '',
                        ''
                    ],
                    [
                        'liquide de freins',
                        '',
                        ''
                    ],
                    [
                        'autres (direction assistée, LHM)',
                        '',
                        ''
                    ],
                    [
                        'présence de fuites',
                        'oui / non',
                        ''
                    ],
                    [
                        {
                            text: 'freins',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'plaquettes',
                        'AV / AR',
                        ''
                    ],
                    [
                        'disques',
                        'AV / AR',
                        ''
                    ],
                    [
                        'tambours',
                        '',
                        ''
                    ],
                    [
                        'amortisseurs',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'moteur',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'fonctionnement',
                        '',
                        ''
                    ],
                    [
                        'démarrage à froid',
                        '',
                        ''
                    ],
                    [
                        'démarrage à chaud',
                        '',
                        ''
                    ],
                    [
                        'présence de voyant au tableau de bord',
                        'oui / non',
                        ''
                    ],
                    [
                        'fumée à l\'échappement',
                        'oui / non',
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'sécurité',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'coupe - circuit',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'oui / non',
                        'emplacement'
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'coupe - batterie',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'oui / non',
                        'emplacement: '
                    ],
                    [
                        {
                            text: 'extincteur',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'oui / non',
                        'emplacement'
                    ],
                    [
                        {
                            text: 'alarme',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'oui / non',
                        'emplacement'
                    ],
                    [
                        {
                            text: 'antivol de direction',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui / non',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'antivol supplémentaire',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui / non',
                            colSpan: 2
                        },
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'autres éléments', 
                            colSpan: 2
                        }
                    ],
                    [
                        'coupe - circuit',
                        'coupe - batterie'
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: '',
                            colSpan: 2
                        },
                        '',
                        'OBSERVATIONS'
                    ],
                    [
                        'Chauffage',
                        'ok / ko',
                        ''
                    ],
                    [
                        'climatisation',
                        '',
                        ''
                    ],
                    [
                        'volant',
                        '',
                        ''
                    ],
                    [
                        'frein à main',
                        '',
                        ''
                    ],
                    [
                        'usure des commandes',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'sellerie / revêtement',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'sièges AV',
                        '',
                        ''
                    ],
                    [
                        'banquette AR',
                        '',
                        ''
                    ],
                    [
                        'état des mousses',
                        '',
                        ''
                    ],
                    [
                        'ciel de toit',
                        '',
                        ''
                    ],
                    [
                        'garnitures des portes',
                        '',
                        ''
                    ],
                    [
                        'planche de bord',
                        '',
                        ''
                    ],
                    [
                        'moquettes AV',
                        '',
                        ''
                    ],
                    [
                        'moquettes AR',
                        '',
                        ''
                    ],
                    [
                        'tapis de coffre',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        '', '', ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'éclairage',
                            colSpan: 3, style: 'title'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: '',
                            colSpan: 2
                        },
                        '',
                        'OBSERVATIONS'
                    ],
                    [
                        'optiques AV',
                        'ok / ko',
                        ''
                    ],
                    [
                        'optiques AR',
                        'ok / ko',
                        ''
                    ],
                    [
                        'feux de stop',
                        'ok/ko',
                        ''
                    ],
                    [
                        'feux de recul',
                        'ok/ko',
                        ''
                    ],
                    [
                        'répétiteurs',
                        'ok/ko',
                        ''
                    ],
                    [
                        'feux de détresse',
                        'ok/ko',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    ['', 
                    '', 
                    ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'essai routier',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: '',
                            colSpan: 2
                        },
                        '',
                        'OBSERVATIONS'
                    ],
                    [
                        'conditions d\'essai',
                        '',
                        ''
                    ],
                    [
                        'itinéraire emprunté',
                        '',
                        ''
                    ],
                    [
                        'vitesse atteinte',
                        '',
                        ''
                    ],
                    [
                        'jeu dans le levier de vitesses',
                        'ok / ko',
                        ''
                    ],
                    [
                        'passage aisé des vitesses',
                        'ok / ko',
                        ''
                    ],
                    [
                        'embrayage',
                        'ok / ko',
                        ''
                    ],
                    [
                        {
                            text: 'BVA (si équipé)',
                            colSpan: 3, 
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'A - coups',
                        'oui / non',
                        ''
                    ],
                    [
                        'patinage BV',
                        'oui / non',
                        ''
                    ],
                    [
                        'kickdown',
                        'oui / non',
                        ''
                    ],
                    [
                        'overdrive',
                        'ok / ko',
                        ''
                    ],
                    [
                        {
                            text: 'comportement de véhicule',
                            colSpan: 3, style: 'title',
                             alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'phases d\'accélération',
                        'ok / ko',
                        ''
                    ],
                    [
                        'phases de freinage',
                        'ok / ko',
                        ''
                    ],
                    [
                        'montée régime moteur',
                        'ok / ko',
                        ''
                    ],
                    [
                        'stabilité du ralenti à chaud',
                        'ok / ko',
                        ''
                    ],
                    [
                        'vibration du volant',
                        'oui / non',
                        ''
                    ],
                    [
                        'tenue de cap',
                        'ok / ko',
                        ''
                    ],
                    [
                        'bruit ou résonnance',
                        'oui / non',
                        ''
                    ],
                    [
                        'autres',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'planche photo',
                            colSpan: 2, 
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        '3/4 avant gauche',
                        '3/4 avant droit'
                    ],
                    [
                        '3/4 arrière gauche',
                        '3/4 arrière droit'
                    ],
                    [
                        'face avant',
                        'face arrière'
                    ],
                    [
                        'latéral gauche',
                        'latéral droit'
                    ],
                    [
                        'tableau de bord',
                        'capote'
                    ],
                    [
                        'sièges avant',
                        'sièges arrière'
                    ],
                    [
                        'jante',
                        'pneu'
                    ],
                    [
                        'autres',
                        'autres'
                    ],
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ],
        },

        {
            text: "supprimer la mention inutile :"
        },
        {
            text: "- Votre véhicule est conforme au type mine receptionné lors de sa commercialisation"
        },
        {
            text: "- Les modifications notables constatées sur votre véhicule  nous obligent à vous informer qu'il n'est plus conforme au type mine receptionné lors de sa commercialisation"
        },
        {
            text: "De ce fait nous vous conseillons fortement de vous rensigner auprès de la préfecture de votre département afin de vous mettre en conformité avec la législation en vigueur"
        },
        {
            text: "Cet examen a été réalisé par ................ sans démontage."
        },
        {
            text: "Compte tenu de l'état descriptif ci-dessus, des caractéristiques du véhicule et des transactions commerciales, nous estimons sa valeur à dire d'expert à : "
        },
        {
            text: "fait et clos à"
        },
        {
            text: "Le"
        },
        {
            text: "Sous les réserves d'usages."
        },
        {
            text: "expert en automobile"
        },
        {
            text: "-VE"
        },
        {
            text: "information : La présente évaluation à caractère indicatif reste subordonnée aux fluctuation du marché caractérisant ce type de véhicule."
        },


    ],
    styles: {
		header: {
			fontSize: 18,
			bold: true
		},
		bigger: {
			fontSize: 15,
			italics: true
		},
        title: {
            color: 'white', fillColor: 'black'
        },
	}
};

export default dd;
