const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const canvas4 = document.getElementById('canvas4');
/**
 * https://www.chartjs.org/docs/latest/configuration/elements.html
 * https://www.chartjs.org/docs/latest/getting-started/
 * https://www.chartjs.org/docs/latest/axes/labelling.html
 */


  new Chart(canvas1, {
    type: 'doughnut',
    data: {
        labels: ['- Россия', '- Казахстан', '- Узбекистан'],
        datasets: [{
            label: '',
            data: [167.5, 132.5, 35],
            borderWidth: 0,
            backgroundColor: [
            '#E83C46',
            '#F9A620',
            '#474444'
            ],
            hoverOffset: 4,
            
        }]
    },
    options: {
        layout: {
            padding: {
                bottom: 0,
                left: 21,
                right: 21,
                top: 0
            }

        },
        element: {
            padding: {
                bottom: 50,
                left: 0,
                right: 0,
                top: 0
            }
        },
        maintainAspectRatio: false,
        radius: 100,
        rotation: -90,
        cutout: 80,    
        plugins: {
            legend: {
                position: 'chartArea',
                align: 'end',
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    align: 'center',
                    boxWidth: 7,
                    boxHeight: 7,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        color: 'rgb(0, 0, 0)'
                    },
                    family: 'Arial'
                },
                padding: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 50
                }
              
            },
        }
    }
  });

  new Chart(canvas2, {
    type: 'doughnut',
    data: {
        labels: ['- Тюмень', '- Петербург', '- Нур-Султан', '- Алма-Аты', '- Ташкент'],
        datasets: [{
            label: '',
            data: [177.5, 355, 177.5, 185, 170,],
            borderWidth: 0,
            backgroundColor: [
            '#E83C46',
            '#005FA7',
            '#F9A620',
            '#808080',
            '#474444',
            
            
            ],
            hoverOffset: 4,
            
        }]
    },
    options: {
        layout: {
            padding: {
                bottom: 0,
                left: 21,
                right: 21,
                top: 70
            }

        },
        element: {
            padding: {
                bottom: 50,
                left: 0,
                right: 0,
                top: 0
            }
        },
        maintainAspectRatio: false,
        radius: 100,
        rotation: -90,
        cutout: 80,    
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    align: 'center',
                    boxWidth: 7,
                    boxHeight: 7,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        color: 'rgb(0, 0, 0)'
                    },
                    family: 'Arial'
                },
                padding: 0
              
            },
        }
    }
  });

  new Chart(canvas3, {
    type: 'doughnut',
    data: {
        labels: ['- Россия', '- Казахстан', '- Узбекистан'],
        datasets: [{
            label: '',
            data: [65, 50, 15],
            borderWidth: 0,
            backgroundColor: [
            '#E83C46',
            '#F9A620',
            '#474444'
            ],
            hoverOffset: 4,
            
        }]
    },
    options: {
        layout: {
            padding: {
                bottom: 0,
                left: 21,
                right: 21,
                top: 0
            }

        },
        element: {
            padding: {
                bottom: 50,
                left: 0,
                right: 0,
                top: 0
            }
        },
        maintainAspectRatio: false,
        radius: 100,
        rotation: -90,
        cutout: 80,    
        plugins: {
            legend: {
                position: 'chartArea',
                align: 'end',
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    align: 'center',
                    boxWidth: 7,
                    boxHeight: 7,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        color: 'rgb(0, 0, 0)'
                    },
                    family: 'Arial'
                },
                padding: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 50
                }
              
            },
        }
    }
  });

  new Chart(canvas4, {
    type: 'doughnut',
    data: {
        labels: ['- Тюмень', '- Петербург', '- Нур-Султан', '- Алма-Аты', '- Ташкент'],
        datasets: [{
            label: '',
            data: [21.6, 43.2, 21.6, 25, 18.2,],
            borderWidth: 0,
            backgroundColor: [
            '#E83C46',
            '#005FA7',
            '#F9A620',
            '#808080',
            '#474444',
            
            
            ],
            hoverOffset: 4,
            
        }]
    },
    options: {
        layout: {
            padding: {
                bottom: 0,
                left: 21,
                right: 21,
                top: 70
            }

        },
        element: {
            padding: {
                bottom: 50,
                left: 0,
                right: 0,
                top: 0
            }
        },
        maintainAspectRatio: false,
        radius: 100,
        rotation: -90,
        cutout: 80,    
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    align: 'center',
                    boxWidth: 7,
                    boxHeight: 7,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        color: 'rgb(0, 0, 0)'
                    },
                    family: 'Arial'
                },
                padding: 0
              
            },
        }
    }
  });