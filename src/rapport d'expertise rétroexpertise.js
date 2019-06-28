var dd = {
    pageSize: 'A4',
    info: {
        title: 'classic expert'
    },
    pageMargins: [40, 100, 40, 70],
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
            },
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
            },
            {
                text: [
                    {
                        text: '© Vedana, 4 rue Alfred Kastler, Les Minimes, 17000 La Rochelle. Tous droits réservés.',
                        alignment: 'center',
                        fontSize: 6
                    }
                ]
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
                        text: 'Référence BCA :',
                        colSpan: 2,
                    },
                        ''],
                    [
                        {
                            text: 'Agence BCA :',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Expert :',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Date du rapport :',
                            colSpan: 2
                        },
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
                        'État civil',
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
                        'État civil',
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
                widths: ['25%', '75%'],
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
                            text: 'DOCUMENTS',
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
                            text: 'PHOTO GÉNÉRALE',
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
                        {
                            text: 'Pas de copier / coller Wikipédia',
                            alignment: 'center'
                        },
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
                widths: ['15,6%', '13,6%', '13,6%', '13,6%', '13,6%', '32,6%'],
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
                            text: 'Absent / Équipé',
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
                            text: 'État',
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
                            bold: true,
                            colSpan: 5,
                            margin: [0, 0, 0, 40]
                        },
                        ' ',
                        ' ',
                        ' ',
                        ' ',
                        {
                            text: 'Remarques : ',
                            bold: true
                        }
                    ],
                ]
            }
        },
        {
            table: {
                headerRows: 1,
                 keepWithHeaderRows: 4,
                 widths: ['15,6%', '13,6%', '13,6%', '13,6%', '13,6%', '32,6%'],
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
                        'État',
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
                        '',
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
                        '',
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
                            text: 'Présence du Hard top',
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
                            text: '',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Teinte d\'origine',
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
                 headerRows: 1,
                 keepWithHeaderRows: 1,
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
                            alignment: 'center',
                            rowSpan: 2,
                        },
                        {
                            text: 'AV',
                            alignment: 'center'
                        },
                        ''
                    ],
                     [
                       '',
                        {
                            text: 'AR',
                            alignment: 'center'
                        },
                        ''
                    ],
                   [
                        {
                            text: 'Disques',
                            alignment: 'center',
                            rowSpan: 2
                        },
                        {
                            text: 'AV',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        '',
                        {
                            text: 'AR',
                            alignment: 'center'
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Tambours',
                            alignment: 'center'
                        },
                        '',
                        ''
                    ],
                    [
                        {
                            text: 'Amortisseurs',
                            alignment: 'center'
                        },
                        '',
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
                        },
                        ''
                    ],
                    [
                        {
                            text: 'Oui / Non'
                        },
                        {
                            text: 'Emplacement :'
                        }
                    ],
                    [
                        {
                            text: 'coupe-batterie',
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
                            text: 'Emplacement : '
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
                            text: 'Emplacement :'
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
                            text: 'Emplacement :'
                        }
                    ],
                    [
                        {
                            text: 'Antivol de direction :',
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
                            text: 'SELLERIE / REVÊTEMENT',
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
                            }
                        ]
                    ]
                ]
            }
        },
        {
            text: '',
            margin: [
                0,
                20
            ]
        },
        {
            layout: 'noBorders',
            table: {
                headerRows: 1,
                 keepWithHeaderRows: 1,
                body: [
                    [
                        {
                            image: "data:image/png;base64,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zi2uODQAapuWAEQA27QkRZEUGRAoZLouKBccBQKgJEuZv7oT09O7n9q9d++bqWQi4C+MRmPB0pLt11//2a2XJNJpiYCqaDn7iwXXH7kwBHcGujo7H7j/wVB///abb0YgTz3xeH1d/Z13371+TT0hxLS5zAjNLBETAqfJjE9ZcJqdmR7oPxaLxfa3HdTc7ptuvKGspAQEAiNjw8fu+dGPh0enuro6r/naV8PheUWVvD7P5PhY2fJVMiPP73lWotKqmprW1tb6i+rbOzs69h/w+QL5fl/lsoo3Xu/40pev+MuuR7xO7+N//v2rr7/2298+RgWfmJoVyMuDFZtbmr923fZNLQ3c4orT+a4BDnNB/l/wGYMjAFvwlGFqmsootcz0s8899+ijj/n9gdramra9+4oKA9+5665LLr3sXDz/c8ECFZxtmalk2u11xeOpx//05D/3PJvnzd+wYcPx8ZHuQz2f27r1ru/fWVxclrtanEFwGR8vEAg254xSRiUAsJJJSdMIpcLilBBEnjJT9/7k50/97bmqyjKJEklRZubCemSOaU6n6vjMhrW+vLy39+5duWrVbGQ+nkgSRpBjwF949z0/+N6374hEjcamdcd6e8pKKn69476169d0tHd2d3VFIjG327Vly5YV1TW+QIFlmdy2VO2k4AScuqvvFDLJQ+5zGWnjheef37XrDwKwannV+Nh4LK63Xn75t+74hr+o2OLcNg1NcyycXO1MLFjBGRSFAAk5lx3a8ZGxB3bs6OvrW712raKqRw4d1DRt86ZNV1x55araWiAAHIFlrVlEtjhGTn6jiCAEIArgwhZCYkqac4dMKaEEASialjE5MTl9Yr6irLC7u+ull18dOz5hE+Lzedevu+iqK68QQHd0xvf6AAAHjklEQVTct2N0dMTlcKYsy+F0qYry9dtu37i55U+PPTI2MVNQUrSyalltVbWvqNThdKialtlzm04nJaakTNuhEkIkzi1ZVnIFutMILhc8cIszwkAiKT3Z3nngmWeeOXr0qNvtqawoGRubyA8Uf/eOb25oakwbJkHBCHCBiqYtCe6jgJAxGxTZWcJg38Df9zz3jxeeDwYrW1qaB0Oh9vaOqqqqO2+/vWnjJtmpEgArlRaUSRJFgZRljXb+94qIGeuHjDnayfwG0SJEPuVCbiOV3lOlTKUSelynlMqy4vF63y/s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",
                            alignment: 'center',
                            colSpan: 2
                        },
                        ''
                    ],
                    [
                        {
                            text: "Information : La présente évaluation à caractère indicatif reste subordonnée aux fluctuation du marché caractérisant ce type de véhicule.",
                            colSpan: 2
                        },
                        ''
                    ]
                ]
            },
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