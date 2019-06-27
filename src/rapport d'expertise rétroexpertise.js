var dd = {
    pageSize: 'A4',
    info: {
        title: 'classic expert',
    },
    pageMargins: [40, 100, 40, 60],
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
                    { text: 'Page ', fontSize: 10},
                    { text: '' + currentPage, bold: true, fontSize: 10},
                    { text: ' sur ', fontSize: 10},
                    { text: '' + pageCount, bold: true, fontSize: 10}
                ],
                alignment: 'right',
                style: 'footerRight',
                margin: [0, 0, 45, 0]
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
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'RAPPORT D\'EXPERTISE RÉTROPERTISE',
                            colSpan: 2, style: 'title',
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
                            text: 'CLIENT',
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
                            text: 'PROPRIÉTAIRE',
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
                            text: 'ÉXAMEN',
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
                dontBreakRows: true,
                 headerRows: 1,
                 keepWithHeaderRows: 22,
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'IDENTIFICATION DU VÉHICULE',
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
                            text: 'PUISSANCE',
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
                            text: 'COULEUR',
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
                            text: 'COMPTEUR',
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
                headerRows: 1,
                 keepWithHeaderRows: 10,
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'DOCUMENTS ET ÉLÉMENTS ADMINISTRATIFS',
                            colSpan: 3, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Certificat d\'immatriculation',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Certificat de situation (-15j)',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Facture d\'achat',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Carnet d\'entretien',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Notice d\'utilisation',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Facture d\'entretien',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Dossier de restauration',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Double de clés',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Contrôle technique',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Défaut CT',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
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
                    [
                        {
                            text: ' ',
                            margin: [
                                0,
                                20
                            ]
                        },
                        {
                            text: ' ',
                            margin: [
                                0,
                                20
                            ]
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
                            text: 'ÉTAT DU VÉHICULE',
                            colSpan: 2, style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: '',
                            colSpan: 2,
                            margin: [
                                0,
                                40
                            ]
                        },
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
                headerRows: 1,
                 keepWithHeaderRows: 7,
                widths: ['20%', '20%', '20%', '20%', '20%'],
                body: [
                    [
                        '',
                        {
                            image: 'data:image/png;base64,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',
                            alignment: 'center'
                        },
                        {
                            image: 'data:image/png;base64,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',
                            alignment: 'center'
                        },
                        {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAIAAACQzIFuAAAAA3NCSVQICAjb4U/gAAAFaklEQVRIiZ1WS2yc5RU9937f98+MH0qMh3FSLEDCIVQQqQXEogmPhCYSEqS8mnaXXdVN0yJWlYoAwTbi0R1sYIEEhgIJSJUSSKC1WYQUkBxQoEayQh62M0lkxZ7553vcy+K3x+MhMYGrWYz033PO/zj3fodUFZcvnTmLzyb07Pl48CMTk6gyUbLGbr+Hrr4Kt26ioatXgdPl2HXsCD74L775loyFavAtWepkIpeVQKQp4sYb8Ns7acsdV8quJ07RG+/h2HGkJMHHpYZ2JxEVfywRuwzG4Jab9A8P0LXX/Ai7fDhGb71PC82YN2Ul6SVujQgAA7Zc0d6KPno/37vlsuzy9r95/wH4lo9BQVj1k6wU0cw6ZCXZuYMfvq99hZepD4/z/oOSN32MqrhS6uLpFD5GyZu8/6AeHu9ml+9O4/V98HkUWd1Fq0hEEfhcX98n353uYFfFK6Ocex/jz6NuC/gYOfd4ZbR4dAag45/y5FRsNn42b2fFZoMnp3T86BL7gY+RkqxqjyssVRUAKemBjwBYzNZ5ciqlCICICCjMrICoglZ1DhFUecn/ChStKXgzOYXZupXPJtjYFAMAAhxxgqrCMQEEFV9gujSICMiIwAbQKEoECwoqCiRVY6x8PmH19DRUADBRVH3i7ImjvpkR/6pU+XW5965y35DNFjU6ZjUjAvFM9P/J5z/PF77wTS9ye1Z5qjpsiUQVKnpqxqZD4+J9gSSgzJwRlZjebsy92Zgbtm5nz5rdfYNXWeulGF5kzOdjfHV+dn9j7mQMBvilLYGozEzFu1cNoaWHxij98c8hxgLGRI4YUAF9GVsvzs1+0moElQ3G7R0cvtGVoqol+ia0Hj938v8pOOLflHr2rKndbEsMBSiotJeds5ZT5yZQDSpRlYnWEn/l8z5jqtYdD62956cZVPz2np8+HlpV6/qM+crna4mLt9pJDSCpsllaeG0BAQCdCvm8JiYkoGbsnoEhAAIFsGdgqGZsApgwr2kq5IBK4bGOMkQcjWFqm2q5LEhUSeElrTNuY1YuqAW6MSuvM85LIoWoWnRjiYiZojFstm12WdZ5TVVFdYMr18hM+1Y9+O2Vvow4qqpqVM2It1f66sFP+1aNzAZXFtWuSXSuZLZttvSLdSBeqY2oWrXu72uHRucv3OBKu/sHo8iSyxFFdvcPXkzp29Da1TdQtc5L6mIAMQ+vJ505i789mVJMK/WJKCMGEQAViVC3OMgaVC2IeHEDepUuoCEyxuL5pxm1qoxcZ1zWpa2qXiVIgioxO+Z6isd8o56iYyZmqAZJXdSL39NlMnIdalULgHZsxcuvMSBEnQNJgGPztW++s3DhWGjNpTSTwpBxa4y5xZUe6h3YmFWCJKxEMQBjaMdWLJ58qunZF8zklG822n1M5Ix99+K5py+cOSeJQZbIEQXVqCrQQTZPDqx/sH8wpCidS6LSIyPX8z/+ClqS1ZNn9Jnn+OJ8cYAQUca87+KFv9RP9LK9vdxbNdYAZeJcJQH1FI/mCwsS/1m99nf9A15kEWWt9PfRE4/R8Hp0ntpyeJxf/ZfkjShSeGjXmcmazf60pnZzVikZs7wmiVopfembL83NzkY/un4EgACWmcs9svsR3rp5sfEHmeAgfO5DSMBkaG0q9YBIRCK0PTMKWBAzQ3Wi1RhxJQs455CVZef2zkzQnWf00BjefJ8aeWw2LHFUuWSqWU4yxFHFVnq0p4zf30/bLp9nFgVOnKLR9zDxNVJsZ7FLsi9lMYtNG3XXFWSxZY2xI/hwDMcnyVoogs9X5sgyCBojbhrBvVt+Qo5cUbN1/G9C6+figY85xiIDi7V2x91UHcRtm1CrroL+HkkqTf/1eDYdAAAAAElFTkSuQmCC',
                            alignment: 'center'
                        },
                        {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAIAAAAnApehAAAAA3NCSVQICAjb4U/gAAACxElEQVRYhe3YzUsqURQA8NMzR4xQXySvUROsbVlCoUSLCDdCQf0n7V33N0QtJalN7QRX5VIkiGIogqDNZNkHPT/GdO7HeQuHh4w9x2kGWvQOZzHXK+c3h7lznXEIEeGL4sdXwf/tL4lhU99mACqAi9KH+3uh0fBTWnE4mMfzSxSJ0ymYbGXI3Do/O4N8HnI5aLdBUaBaBZ8PRkbA5YL1dVhb49GoCR6NgiJWarXG3h6LxRCgf6pzc687O/LbGzGsi2hsVyWJpVKGanfSjY2n83Nu1S4WMRIxBWs5NcUlyYJdKqHX+xm4k4EAv742bXPE5uXlJzvuzunp51LJnK0oCl9asgoDIABLpWRZNmGT/X1b4E6+7e4OZHNERgjOztpos5mZNiG9y15vE0Q1l7MR7iQvlViPrd+FVM6dhYKJnW6wGMrl2ob7GldVXFy0vW+Mx5HpO9f/lpTL5SAh2iCdhpUVS/0WCrC9DQDQbt/LcjAc7p7U2/6HB5BlbZBIQDJpyW61tIN6faRa1U3qr7dQLsPLizZQFEtwd4Wnp5/1uoHNRBHGxqySvTE+/nt01MB+FEWYnNQGHo9V8m8Fr7fh8+km9dd7IhAAp1MbZLMgSZbsiwvtQBBCoZB+Vrfu64TwrS3777F0WjHcW1wOR2t52VKvHwVdXRV6P9WdC0MkqoozM3Y2HY2yQfZzLQ4ObLRJNvsh8rFNEen8vC0wi8ebzaYJmyCSqyucmLBqh8MtSfrXQ2O/5zV6fGwJFgQ8Pe1Tv5+tItLDQwwEPgOHQpjP9yluYGtncHNDFxZMwTyRILe3hpUHsDt3XSaDg6y+WAwzGUZp71NKb5h8Hzs6gmIRTk6AMbi7g1oNPB6IRGB4GJJJiMdhc3PwYiZsDkAB3gHczeZrpSLKMjw/c7//MRj0i+K72+0GcJh5FTXZt63xXf93+K72H7nnQnQFVRMjAAAAAElFTkSuQmCC',
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
                    [
                        {
                            text: '',
                            colSpan: 2,
                            margin: [
                                0,
                                40
                            ]
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
                            text: 'HISTORIQUE DU MODÈLE',
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
                            text: 'HISTORIQUE',
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
                headerRows: 1,
                 keepWithHeaderRows: 12,
                widths: ['13,6%', '13,6%', '13,6%', '13,6%', '13,6%', '34,6%'],
                body: [
                    [
                        {
                            text: 'PNEUMATIQUES',
                            colSpan: 5,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        '',
                        '',
                        '',
                        {
                            text: 'ROUE DE SECOURS',
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
                            colSpan: 5,
                            margin: [0, 0, 0, 40]
                        },
                        ' ',
                        ' ',
                        ' ',
                        ' ',
                        'Remarques : '
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
                headerRows: 1,
                 keepWithHeaderRows: 4,
                widths: ['16,6%', '16,6%', '16,6%', '16,6%', '16,6%', '16,6%'],
                body: [
                    [
                        {
                            text: 'JANTES / ENJOLIVEURS',
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
                            bold: true,
                            colSpan: 5,
                            margin: [0, 0, 0, 40]
                        },
                        '',
                        '',
                        '',
                        '',
                        {
                            text: 'Remarques :',
                            bold: true
                        }
                    ],
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
                headerRows: 1,
                 keepWithHeaderRows: 17,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [
                        {
                            text: 'CARROSSERIE',
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
                            text: 'Oui / Non',
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
                            text: 'Oui / Non',
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
                            text: 'Oui / Non',
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
                            text: 'Oui / Non',
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
                                    text: 'Oui / Non',
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
                            text: 'Oui / Non',
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
                            text: 'Bon / Mauvais',
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
                            text: 'Bon / Mauvais',
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
                            text: 'Bon / Mauvais',
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
                            text: 'Etat des joints',
                            alignment: 'center'
                        },
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Etat des chromes',
                            alignment: 'center'
                        },
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Etat de la capote',
                            alignment: 'center'
                        },
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Présence du hard top',
                            alignment: 'center'
                        },
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Rétroviseurs',
                            alignment: 'center'
                        },
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Essuie - glace',
                            alignment: 'center'
                        },
                        '',
                        {
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Pièces manquantes (Chromes PC, Enjoliveurs)',
                            alignment: 'center'
                        },
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
                headerRows: 1,
                 keepWithHeaderRows: 6,
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'PEINTURE',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Code teinte',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Différence de teinte',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Cloques apparentes',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Peinture craquelée',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Pièces manquantes (Chromes, PC, Enjoliveurs...)',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Remarques :',
                            bold: true,
                            colSpan: 3,
                            margin: [0, 0, 0, 20]
                        },
                        ' ',
                        ' ',
                    ]
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
                            text: 'Autres',
                            margin: [
                                0,
                                40
                            ]
                        },
                        {
                            text: 'Autres',
                            margin: [
                                0,
                                40
                            ]
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
                headerRows: 1,
                 keepWithHeaderRows: 17,
                widths: ['33,3%', '33,3%', '33,3%'],
                body: [
                    [
                        {
                            text: 'MÉCANIQUE',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'NIVEAUX',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Huile moteur',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Liquide de refroidissement',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Liquide de freins',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Autres (direction assistée, LHM)',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Présence de fuites',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'FREINS',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Plaquettes',
                            alignment: 'center'
                        },
                        {
                            text: 'AV / AR',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Disques',
                            alignment: 'center'
                        },
                        {
                            text: 'AV / AR',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Tambours',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Amortisseurs',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'MOTEUR',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Fonctionnement',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Démarrage à froid',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Démarrage à chaud',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Présence de voyant au tableau de bord',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Fumée à l\'échappement',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
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
                            text: 'SÉCURITÉ',
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
                            text: 'Oui / Non',
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
                headerRows: 1,
                 keepWithHeaderRows: 9,
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'Coupe - batterie',
                            colSpan: 2,
                            style: 'title'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Oui / Non'
                        },
                        {
                            text: 'Emplacement: '
                        }
                    ],
                    [
                        {
                            text: 'Extincteur',
                            colSpan: 2,
                            style: 'title'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Oui / Non'
                        },
                        {
                            text: 'Emplacement'
                        }
                    ],
                    [
                        {
                            text: 'Alarme',
                            colSpan: 2,
                            style: 'title' 
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Oui / Non'
                        },
                        {
                            text: 'Emplacement'
                        }
                    ],
                    [
                        {
                            text: 'Antivol de direction',
                            colSpan: 2,
                            style: 'title'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Oui / Non',
                            colSpan: 2,
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Antivol supplémentaire',
                            colSpan: 2,
                            style: 'title'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Oui / Non',
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
                            text: 'Autres éléments',
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Coupe - circuit',
                            alignment: 'center'
                        },
                        {
                            text: 'Coupe - batterie',
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
                        {
                            text: 'OBSERVATIONS',
                            alignment: 'center'
                        }
                    ],
                    [
                        {
                            text: 'Chauffage',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Climatisation',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Volant',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Frein à main',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Usure des commandes',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Sellerie / Revêtement',
                            colSpan: 3,
                            style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Sièges AV',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Banquette AR',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Etat des mousses',
                            alignment: 'center'
                        },
                        {
                            text: 'Bon / Mauvais',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Ciel de toit',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Garnitures des portes',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Planche de bord',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Moquettes AV',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Moquettes AR',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Tapis de coffre',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Remarques :',
                            bold: true,
                            colSpan: 3,
                            margin: [0, 0, 0, 20]
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
                widths: ['33.3%', '33.3%', '33.3%'],
                body: [
                    [
                        {
                            text: 'Eclairage',
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
                        {
                            text: 'OBSERVATIONS',
                            alignment: 'center'
                        }
                    ],
                    [
                        {
                            text: 'Optiques AV',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Optiques AR',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Feux de stop',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Feux de recul',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Répétiteurs',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Feux de détresse',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Remarques :',
                            bold: true,
                            colSpan: 3,
                            margin: [0, 0, 0, 20]
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
                            text: 'ESSAI ROUTIER',
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
                        {
                            text: 'OBSERVATIONS',
                            alignment: 'center'
                        }
                    ],
                    [
                        {
                            text: 'Conditions d\'essai',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Itinéraire emprunté',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Vitesse atteinte',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Jeu dans le levier de vitesses',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Passage aisé des vitesses',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Embrayage',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
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
                        {
                            text: 'A - coups',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Patinage BV',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Kick down',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Overdrive',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'COMPORTEMENT DU VÉHICULE',
                            colSpan: 3, style: 'title',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Phases d\'accélération',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Phases de freinage',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Montée régime moteur',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Stabilité du ralenti à chaud',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Vibration du volant',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Tenue de cap',
                            alignment: 'center'
                        },
                        {
                            text: 'OK / KO',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Bruit ou résonnance',
                            alignment: 'center'
                        },
                        {
                            text: 'Oui / Non',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Autres',
                            alignment: 'center'
                        },
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
                            text: 'PLANCHE PHOTO',
                            colSpan: 2,
                            style: 'title',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        '3/4 Avant gauche',
                        '3/4 Avant droit'
                    ],
                    [
                        '3/4 Arrière gauche',
                        '3/4 Arrière droit'
                    ],
                    [
                        'Face avant',
                        'Face arrière'
                    ],
                    [
                        'Latéral gauche',
                        'Latéral droit'
                    ],
                    [
                        'Tableau de bord',
                        'Capote'
                    ],
                    [
                        'Sièges avant',
                        'Sièges arrière'
                    ],
                    [
                        'Jante',
                        'Pneu'
                    ],
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
                headerRows: 1,
                 keepWithHeaderRows: 1,
                body: [
                    [
                        [
                            {
                                text: "Supprimer la mention inutile :",
                                color: 'red'
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    10
                                ]
                            },
                            {
                                text: "- Votre véhicule est conforme au type mine receptionné lors de sa commercialisation"
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    10
                                ]
                            },
                            {
                                text: "- Les modifications notables constatées sur votre véhicule  nous obligent à vous informer qu'il n'est plus conforme au type mine receptionné lors de sa commercialisation."
                            },
                            {
                                text: "De ce fait nous vous conseillons fortement de vous rensigner auprès de la préfecture de votre département afin de vous mettre en conformité avec la législation en vigueur"
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    10
                                ]
                            },
                            {
                                text: "Cet examen a été réalisé par ......... sans démontage."
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "Compte tenu de l'état descriptif ci-dessus, des caractéristiques du véhicule et des transactions commerciales, nous estimons sa valeur à dire d'expert à : "
                            },{
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "Fait et clos à"
                            },{
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "Le"
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "Sous les réserves d'usages."
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "Expert en automobile"
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "-VE"
                            },
                            {
                                text: '',
                                margin: [
                                    0,
                                    20
                                ]
                            },
                            {
                                text: "Information : La présente évaluation à caractère indicatif reste subordonnée aux fluctuation du marché caractérisant ce type de véhicule."
                            },
                        ]
                    ]
                ]
            }

        }
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
    },
};

export default dd;
