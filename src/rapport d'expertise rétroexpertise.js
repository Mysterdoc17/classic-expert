var dd = {
    pageSize: 'A4',
    info: {
        title: 'classic expert',
    },
    pageMargins: [40, 100, 40, 50],
    header: function (currentPage, pageCount) {
        return [
            {
                height: 60,
                alignment: 'center',
                margin: [0, 20, 0, 0],
                image: 'data:image/png;base64,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'

            },
            {
                text: 'Référence BCA :',
                alignment: 'center',
            }
        ]
    },
    footer: function (currentPage, pageCount) {
        return [
            
            {
                text: [
                    { text : 'Page '}, 
                    {text : ''+currentPage,  bold: true},
                    {text: ''+ '/'}, 
                    {text: ''+pageCount, bold: true}
                    ],
                alignment: 'right',
                style: 'footerRight',
                margin: [0, 0,20,0]
            },
            {
            stack: [
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 50,
                        y: 0,
                        w: 500,
                        h: 0,
                        lineColor: '#c1943f'
                    }
                    ]
            }
            ]
        },
            {
                text: [
                    {
                        text: 'CAR SECURE',
                        style: 'header',
                        fontSize: 10,
                        alignment: 'center'
                    },
                    {
                        text: ' - S.A.S à capital haut de 940 000 € - R.C.S Nanterre Siret : 800 170 011 00012',
                        alignment: 'center',
                        fontSize: 10,
                    }
                ],
            },
               {
                text: [
                     {
                        text: 'Siège social : 14, rue Sarah Bernhardt - CS 60005 - 92665 - Asnières sur Seine Cedex - www.experveo.fr',
                        alignment: 'center',
                        fontSize: 10
                    }
                ],
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
                            text: 'Renseignements', colSpan: 2, style: 'title',
                            alignment: 'center',
                        },
                        '',
                    ],
                    [{
                        text: 'Référence BCA:',
                        colSpan: 2,
                    },
                        ''],
                    [
                        { text: 'Agence BCA:', colSpan: 2 }, ''
                    ],
                    [
                        { text: 'Expert:', colSpan: 2 },
                        '',

                    ],
                    [
                        { text: 'Date du rapport:', colSpan: 2 },
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
                widths: ['25%', '75%'],
                body: [

                    [
                        {
                            text: 'Client',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Etat civil',
                        ''
                    ],
                    [
                        'Nom / Prénom',
                        ''
                    ],
                    [
                        'Adresse',
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
                widths: ['25%', '75%'],
                body: [
                    [
                        {
                            text: 'Propriétaire',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Etat civil',
                        ''
                    ],
                    [
                        'Nom / Prénom',
                        ''
                    ],
                    [
                        'Adresse',
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
                widths: ['25%', '75%'],
                body: [
                    [
                        {
                            text: 'Examen',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Lieu',
                        ''
                    ],
                    [
                        'Date',
                        ''
                    ],
                    [
                        'Personnes Présentes',
                        ''
                    ],
                    [
                        'Condition',
                        ''
                    ],
                    [
                        'Origine de la mission',
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
                            text: 'Identification du véhicule',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Marque',
                        ''
                    ],
                    [
                        'Modèle',
                        ''
                    ],
                    [
                        'Finition',
                        ''
                    ],
                    [
                        'Immatriculation',
                        ''
                    ],
                    [
                        'Date de première mise en circulation',
                        'JJ/MM/AAAA'
                    ],
                    [
                        'Date de certificat d\'immatriculation',
                        'JJ/MM/AAAA'
                    ],
                    [
                        'Type',
                        'normale / collection'
                    ],
                    [
                        'Type mines',
                        ''
                    ],
                    [
                        'Numéro de série',
                        ''
                    ],
                    [
                        'Numéro du moteur',
                        ''
                    ],
                    [
                        'Genre',
                        ''
                    ],
                    [
                        'Carrosserie',
                        ''
                    ],
                    [
                        {
                            text: 'Puissance',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Réelle / fiscale',
                        ''
                    ],
                    [
                        'Energie',
                        ''
                    ],
                    [
                        {
                            text: 'Couleur',
                            colSpan: 2, style: 'title',
                            alignment: 'center',
                        },
                        ''
                    ],
                    [
                        'Teinte',
                        ''
                    ],
                    [
                        'Type',
                        ''
                    ],
                    [
                        {
                            text: 'Compteur',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Relevé',
                        ''
                    ],
                    [
                        'Unité',
                        ''
                    ],
                    [
                        'Cohérent',
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
                        'Frappe à froid',
                        ''
                    ],
                    [
                        'Plaque constructeur',
                        ''
                    ],
                    [
                        'Compteur',
                        ''
                    ],
                    [
                        'Certificat d\'immatriculation',
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
                            text: 'Documents et éléments administratifs',
                            colSpan: 3, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'Certificat d\'immatriculation',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Certificat de situation (-15j)',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Facture d\'achat',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Carnet d\'entretien',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Notice d\'utilisation',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Facture d\'entretien',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Dossier de restauration',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Double de clés',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Contrôle technique',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Défaut CT',
                        {
                            text: 'oui / non',
                            alignment: 'center'
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
                            text: 'Documents',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [' ', ' '],
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
                            text: 'Etat du véhicule',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        ' ',
                        ' '
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
                        '',
                        {
                            text: 'Bien',
                            alignment: 'center'
                        },
                        {
                            text: 'Moyen',
                            alignment: 'center'
                        },
                        {
                            text: 'Mal',
                            alignment: 'center'
                        },
                        {
                            text: 'Non acceptable',
                            alignment: 'center'
                        },
                    ],
                    [
                        {
                            text: 'Conformité administrative',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Historique',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Carrosserie',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Peinture',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Mécanique',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Sellerie',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Véhicule complet',
                            alignment: 'center'
                        },
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
                            text: 'Photo générale',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [' ', ' '],
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
                            text: 'Historique du modèle',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Pas de copier / coller Wikipédia',
                        ''
                    ],
                    [
                        {
                            text: 'Historique entretien / réparation / restauration',
                            colSpan: 2,
                            alignment: 'center'
                        },
                        ''
                    ],
                    [' ', ' '],
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
                widths: ['16,6%', '16,6%', '16,6%', '16,6%', '16,6%', '16,6%'],
                body: [
                    [
                        {
                            text: 'Pneumatiques',
                            colSpan: 5,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        {
                            text: 'Roue de secours',
                            alignment: 'center',
                            style: 'title'
                        },
                    ],
                    [
                        '',
                        {
                            text: 'AVD',
                            alignment: 'center'
                        },
                        {
                            text: 'AVG',
                            alignment: 'center'
                        },
                        {
                            text: 'ARD',
                            alignment: 'center'
                        },
                        {
                            text: 'ARG',
                            alignment: 'center'
                        },
                        {
                            text: 'Absent / équipé',
                            alignment: 'center'
                        },
                    ],
                    [
                        {
                            text: 'Marque',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Modèle',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Largeur',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Hauteur',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Diamètre',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Date de fabrication',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Charge',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Vitesse',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Taux d\'usure',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Etat',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Remarques : ',
                            colSpan: 5
                        },
                        ' ',
                        ' ',
                        ' ',
                        ' ',
                        {
                            text: 'Remarques : '
                        }
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
                widths: ['16,6%', '16,6%', '16,6%', '16,6%', '16,6%', '16,6%'],
                body: [
                    [
                        {
                            text: 'Jantes / Enjoliveurs',
                            colSpan: 6,
                            style: 'title',
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
                        {
                            text: 'AVD',
                            alignment: 'center'
                        },
                        {
                            text: 'AVG',
                            alignment: 'center'
                        },
                        {
                            text: 'ARD',
                            alignment: 'center'
                        },
                        {
                            text: 'ARG',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Type',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        'Etat',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Remarques : ',
                            colSpan: 6, style: 'title'
                        },
                        '',
                        '',
                        '',
                        '',
                        ''
                    ],
                    [
                        ' ',
                        ' ',
                        ' ',
                        ' ',
                        ' ',
                        ' '
                    ]
                ],
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
                            text: 'Carrosserie',
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
                            colSpan: 2
                        },
                        '',
                        {
                            text: 'LOCALISATION',
                            alignment: 'center'
                        },
                        {
                            text: 'OBSERVATIONS',
                            alignment: 'center'
                        },
                    ],
                    [
                        {
                            text: 'Rayures',
                            alignment: 'center'
                        },
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Enfoncement',
                            alignment: 'center'
                        },
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Présence de mastic',
                            alignment: 'center'
                        },
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Corrosion apparente',
                            alignment: 'center'
                        },
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Corrosion perforante',
                            alignment: 'center'
                        },
                        {
                            alignment: 'center',
                            columns: [
                                {
                                    	width: 20,
                                    canvas: [
                                        {
                                            type: 'rect',
                                            x: 0,
                                            y: 2,
                                            w: 10,
                                            h: 10,
                                            lineWidth: 1,
                                            lineColor: 'black',
                                        },

                                    ]
                                },
                                {
                                    width: 'auto',
                                    text: 'oui / non',
                                },
                            ]
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Traces de réparation',
                            alignment: 'center'
                        },
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Alignement des éléments',
                            alignment: 'center'
                        },
                        {
                            text: 'bon / mauvais',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Etat des planchers',
                            alignment: 'center'
                        },
                        {
                            text: 'bon / mauvais',
                            alignment: 'center'
                        },
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Etat des bas de caisse',
                            alignment: 'center'
                        },
                        {
                            text: 'bon / mauvais',
                            alignment: 'center'
                        },
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Etat des joints',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Etat des chromes',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Etat de la capote',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Présence du hard top',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Rétroviseurs',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Essuie - glace',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'Pièces manquantes (chromes PC, enjoliveurs)',
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
                            text: 'Peinture',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'Code teinte',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Différence de teinte',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Cloques apparentes',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Peinture craquelée',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Pièces manquantes (chromes, PC, enjoliveurs...)',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Remarques',
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
                        'Autres',
                        'Autres'
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
                            text: 'Mécanique',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Niveaux',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'Huile moteur',
                        '',
                        ''
                    ],
                    [
                        'Liquide de refroidissement',
                        '',
                        ''
                    ],
                    [
                        'Liquide de freins',
                        '',
                        ''
                    ],
                    [
                        'Autres (direction assistée, LHM)',
                        '',
                        ''
                    ],
                    [
                        'Présence de fuites',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Freins',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'Plaquettes',
                        {
                            text: 'AV / AR',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Disques',
                        {
                            text: 'AV / AR',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Tambours',
                        'ok / ko',
                        ''
                    ],
                    [
                        'Amortisseurs',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Moteur',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        'Fonctionnement',
                        '',
                        ''
                    ],
                    [
                        'démarrage à froid',
                        '',
                        ''
                    ],
                    [
                        'Démarrage à chaud',
                        '',
                        ''
                    ],
                    [
                        'Présence de voyant au tableau de bord',
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'Fumée à l\'échappement',
                        {
                            text: 'oui / non',
                            alignment: 'center'
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
                            text: 'Sécurité',
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Coupe - circuit',
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        {
                            text: 'Emplacement',
                            alignment: 'center'
                        }
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
                            text: 'Coupe - batterie',
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        {
                            text: 'emplacement: ',
                            alignment: 'center'
                        }
                    ],
                    [
                        {
                            text: 'Extincteur',
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        {
                            text: 'Emplacement',
                            alignment: 'center'
                        }
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
                        {
                            text: 'oui / non',
                            alignment: 'center'
                        },
                        {
                            text: 'emplacement',
                            alignment: 'center'
                        }
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
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'coupe - circuit',
                            alignment: 'center'
                        },
                        {
                            text: 'coupe - batterie',
                            alignment: 'center'
                        }
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
                            text: '',
                            colSpan: 2
                        },
                        '',
                        'OBSERVATIONS'
                    ],
                    [
                        'Chauffage',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'climatisation',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'volant',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'frein à main',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'usure des commandes',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
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
                        'ok / ko',
                        ''
                    ],
                    [
                        'banquette AR',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'état des mousses',
                        {
                            text: 'bon / mauvais',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'ciel de toit',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'garnitures des portes',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'planche de bord',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'moquettes AV',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'moquettes AR',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        'tapis de coffre',
                        {
                            text: 'ok / ko',
                            alignment: 'center'
                        },
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
                widths: ['33.3%', '33.3%', '33.3%'],
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
                        'ok / ko',
                        ''
                    ],
                    [
                        'feux de recul',
                        'ok / ko',
                        ''
                    ],
                    [
                        'répétiteurs',
                        'ok / ko',
                        ''
                    ],
                    [
                        'feux de détresse',
                        'ok / ko',
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
