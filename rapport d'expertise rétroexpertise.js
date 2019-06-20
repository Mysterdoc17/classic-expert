var dd = {
        pageSize: 'A4',
        info : {
            title : number,
        },
        header: function(currentPage, pageCount) {
            return [
                {
                    stack: 
                            [
                                {
                                    text: header, 
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
                                    text: footer, 
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
            text: 'rapportdexpertiseetrétroexpertise',
            style: 'header',
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
                body: [
                    [
                        'référenceBCA',
                        ''
                    ],
                    [
                        'agenceBCA',
                        ''
                    ],
                    [
                        'expert',
                        ''
                    ],
                    [
                        'datedurapport',
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
                body: [
                    [
                        {
                            text: 'client',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'étatcivil',
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
            text: "",
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
                            text: 'propriétaire',
                            colSpan: 2
                        },
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
                body: [
                    [
                        {
                            text: 'examen',
                            colSpan: 2
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
                        'personnesprésentes',
                        ''
                    ],
                    [
                        'condition',
                        ''
                    ],
                    [
                        'originedelamission',
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
                body: [
                    [
                        {
                            text: 'identificationduvéhicule',
                            colSpan: 2
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
                        'datedepremièremiseencirculation',
                        'JJ/MM/AAAA'
                    ],
                    [
                        'datedecertificatdimmatriculation',
                        'JJ/MM/AAAA'
                    ],
                    [
                        'type',
                        'normale/collection'
                    ],
                    [
                        'typemines',
                        ''
                    ],
                    [
                        'numérodesérie',
                        ''
                    ],
                    [
                        'numérodumoteur',
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
                            colSpan: 2
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
                            colSpan: 2
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
                            colSpan: 2
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
                body: [
                    [
                        'frappeàfroid',
                        ''
                    ],
                    [
                        'plaqueconstructeur',
                        ''
                    ],
                    [
                        'compteur',
                        ''
                    ],
                    [
                        'certificatd\'immatriculation',
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
                body: [
                    [
                        {
                            text: 'documentsetélémentsadministratifs',
                            colSpan: 3                        },
                        '',
                        ''
                    ],
                    [
                        'certificatdimmatriculation',
                        'oui/non',
                        ''
                    ],
                    [
                        'certificatdesituation(-15j)',
                        'oui/non',
                        ''
                    ],
                    [
                        'facturedachat',
                        'oui/non',
                        ''
                    ],
                    [
                        'carnetdentretien',
                        'oui/non',
                        ''
                    ],
                    [
                        'noticedutilisation',
                        'oui/non',
                        ''
                    ],
                    [
                        'facturedentretien',
                        'oui/non',
                        ''
                    ],
                    [
                        'dossierderestauration',
                        'oui/non',
                        ''
                    ],
                    [
                        'doubledeclés',
                        'oui/non',
                        ''
                    ],
                    [
                        'contrôletechnique',
                        'oui/non',
                        ''
                    ],
                    [
                        'défautCT',
                        'oui/non',
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
                body: [
                    [
                        {
                            text: 'documents',
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
                body: [
                    [
                        {
                            text: 'étatduvéhicule',
                            colSpan: 2
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
                body: [
                    [
                        '','bien','moyen','mal','nonacceptable',
                    ],
                    [
                        'conformitéadministrative',
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
                        'véhiculecomplet',
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
                body: [
                    [
                        {
                            text: 'photogénérale',
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
                body: [
                    [
                        {
                            text: 'historiquedumodèle',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'pasdecopier/collerWikipédia',
                        ''
                    ],
                    [
                        {
                            text: 'historiqueentretien/réparation/restauration',
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
                body: [
                    [
                        {
                            text: 'pneumatiques',
                            colSpan: 5
                        },
                        'rouedesecours',
                        '',
                        '',
                        ''
                    ],
                    [
                        'AVD',
                        'AVG',
                        'ARD',
                        'ARG',
                        'Absent/équipé'
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
                        'datedefabrication', 
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
                        'tauxdusure',
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
                            colSpan: 5
                        },
                        '',
                        '',
                        '',
                        '',
                        
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
                body: [
                    [
                        {
                            text: 'jantes/enjoliveurs',
                            colSpan: 6
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
                            colSpan: 6
                        },
                        '',
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
                body: [
                    [
                        {
                            text: 'carrosserie',
                            colSpan: 4
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
                        'oui/non',
                        '',
                        ''
                    ],
                    [
                        'enfoncement',
                        'oui/non',
                        '',
                        ''
                    ],
                    [
                        'présencedemastic',
                        'oui/non',
                        '',
                        ''
                    ],
                    [
                        'corrosionapparente',
                        'oui/non',
                        '',
                        ''
                    ],
                    [
                        'corrosionperforante',
                        'oui/non',
                        '',
                        ''
                    ],
                    [
                        'tracesderéparation',
                        'oui/non',
                        '',
                        ''
                    ],
                    [
                        'alignmentdeséléments',
                        'bon/mauvais',
                        '',
                        ''
                    ],
                    [
                        'étatdesplanchers',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'étatdesbasdecaisse',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'étatdesjoints',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'étatdeschromes',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'étatdelacapote',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'présenceduhardtop',
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
                        'essuie-glace',
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'piècesmanquantes(chromes PC, enjoliveurs)',
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
                body: [
                    [
                        {
                            text: 'peinture',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        'codeteinte',
                        'oui/non',
                        ''
                    ],
                    [
                        'différencedeteinte',
                        'oui/non',
                        ''
                    ],
                    [
                        'cloquesapparentes',
                        'oui/non',
                        ''
                    ],
                    [
                        'peinturecraquelée',
                        'oui/non',
                        ''
                    ],
                    [
                        'piècesmanquantes(chromes, PC, enjoliveurs...)', 
                        '', 
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
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
                body: [
                    [
                        {
                            text: 'mécanique',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'niveaux',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        'huilemoteur',
                        '',
                        ''
                    ],
                    [
                        'liquidederefroidissement',
                        '',
                        ''
                    ],
                    [
                        'liquidedefreins',
                        '',
                        ''
                    ],
                    [
                        'autres(directionassistée, LHM)',
                        '',
                        ''
                    ],
                    [
                        'présencedefuites',
                        'oui/non',
                        ''
                    ],
                    [
                        {
                            text: 'freins',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        'plaquettes',
                        'AV/AR',
                        ''
                    ],
                    [
                        'disques',
                        'AV/AR',
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
                            colSpan: 3
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
                        'démarrageàfroid',
                        '',
                        ''
                    ],
                    [
                        'démarrageàchaud',
                        '',
                        ''
                    ],
                    [
                        'présencedevoyantautableaudebord',
                        'oui/non',
                        ''
                    ],
                    [
                        'fuméeàl\'échappement',
                        'oui/non',
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
                body: [
                    [
                        {
                            text: 'sécurité',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'coupecircuit',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'oui/non',
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
                body: [
                    [
                        {
                            text: 'coupebatterie',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'oui/non',
                        'emplacement: '
                    ],
                    [
                        {
                            text: 'extincteur',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'oui/non',
                        'emplacement'
                    ],
                    [
                        {
                            text: 'alarme',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        'oui/non',
                        'emplacement'
                    ],
                    [
                        {
                            text: 'antivoldedirection',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui/non',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'antivolsupplémentaire',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'oui/non',
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
                body: [
                    [
                        'coupe-circuit',
                        'coupe-batterie'
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
                        'ok/ko',
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
                        'freinàmain',
                        '',
                        ''
                    ],
                    [
                        'usuredescommandes',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'sellerie/revêtement',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        'siègesAV',
                        '',
                        ''
                    ],
                    [
                        'banquetteAR',
                        '',
                        ''
                    ],
                    [
                        'étatdesmousses',
                        '',
                        ''
                    ],
                    [
                        'cieldetoit',
                        '',
                        ''
                    ],
                    [
                        'garnituresdesportes',
                        '',
                        ''
                    ],
                    [
                        'planchedebord',
                        '',
                        ''
                    ],
                    [
                        'moquettesAV',
                        '',
                        ''
                    ],
                    [
                        'moquettesAR',
                        '',
                        ''
                    ],
                    [
                        'tapisdecoffre',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
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
                body: [
                    [
                        {
                            text: 'éclairage',
                            colSpan: 3
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
                        'optiquesAV',
                        'ok/ko',
                        ''
                    ],
                    [
                        'optiquesAR',
                        'ok/ko',
                        ''
                    ],
                    [
                        'feuxdestop',
                        'ok/ko',
                        ''
                    ],
                    [
                        'feuxderecul',
                        'ok/ko',
                        ''
                    ],
                    [
                        'répétiteurs',
                        'ok/ko',
                        ''
                    ],
                    [
                        'feuxdedétresse',
                        'ok/ko',
                        ''
                    ],
                    [
                        {
                            text: 'remarques',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                ]
            }
        },
        {
            table: {
                body: [
                    [
                        {
                            text: 'essairoutier',
                            colSpan: 3
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
                        'conditionsd\'essai',
                        '',
                        ''
                    ],
                    [
                        'itinéraireemprunté',
                        '',
                        ''
                    ],
                    [
                        'vitesseatteinte',
                        '',
                        ''
                    ],
                    [
                        'jeudanslelevierdevitesses',
                        'ok/ko',
                        ''
                    ],
                    [
                        'passageaisédesvitesses',
                        'ok/ko',
                        ''
                    ],
                    [
                        'embrayage',
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'BVA(siéquipé)',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        'A-coups',
                        'oui/non',
                        ''
                    ],
                    [
                        'patinageBV',
                        '',
                        ''
                    ],
                    [
                        'kickdown',
                        '',
                        ''
                    ],
                    [
                        'overdrive',
                        'ok/ko',
                        ''
                    ],
                    [
                        {
                            text: 'comportementdevéhicule',
                            colSpan: 3
                        },
                        '',
                        ''
                    ],
                    [
                        'phasesd\'accélération',
                        'ok/ko',
                        ''
                    ],
                    [
                        'phasesdefreinage',
                        'ok/ko',
                        ''
                    ],
                    [
                        'montéerégimemoteur',
                        'ok/ko',
                        ''
                    ],
                    [
                        'stabilitéduralentiàchaud',
                        'ok/ko',
                        ''
                    ],
                    [
                        'vibrationduvolant',
                        'oui/non',
                        ''
                    ],
                    [
                        'tenuedecap',
                        'ok/ko',
                        ''
                    ],
                    [
                        'bruitourésonnance',
                        'oui/non',
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
                body: [
                    [
                        {
                            text: 'planchephoto',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        '3/4avantgauche',
                        '3/4avantdroit'
                    ],
                    [
                        '3/4arrièregauche',
                        '3/4arrièredroit'
                    ],
                    [
                        'faceavant',
                        'facearrière'
                    ],
                    [
                        'latéralgauche',
                        'latéraldroit'
                    ],
                    [
                        'tableaudebord',
                        'capote'
                    ],
                    [
                        'siègesavant',
                        'siègesarrière'
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


    ]
};