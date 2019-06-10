import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  positions = [{
    positionName: 'Goalkeepers',
    members: [{
      id: 1,
      name: 'Gianluigi Buffon',
      image: '/assets/img/players/card-buffon.jpg',
      position: 'Goalkeeper',
      number: 1,
      statistic: {
        appearances: 25,
        minutes_played: 2205,
        clean_sheets: 9,
        saves: 65
      }
    }, {
      id: 2,
      name: 'Alphonse Areola',
      image: '/assets/img/players/card-areola.jpg',
      position: 'Goalkeeper',
      number: 16,
      statistic: {
        appearances: 31,
        minutes_played: 2805,
        clean_sheets: 16,
        saves: 67
      }
    }, {
      id: 3,
      name: 'Sebastien Cibois',
      image: '/assets/img/players/card-cibois.jpg',
      position: 'Goalkeeper',
      number: 50,
      statistic: {
        appearances: '0',
        minutes_played: '0',
        clean_sheets: '0',
        saves: '0'
      }
    }]
  }, {
    positionName: 'Defenders',
    members: [{
      id: 4,
      name: 'Thiago Silva',
      image: '/assets/img/players/card-silva.jpg',
      position: 'Defender',
      number: 2,
      statistic: {
        appearances: 39,
        minutes_played: 3299,
        goals: '0',
        assists: 1
      }
    }, {
      id: 5,
      name: 'Presnel Kimpembe',
      image: '/assets/img/players/card-kimpembe.jpg',
      position: 'Defender',
      number: 3,
      statistic: {
        appearances: 36,
        minutes_played: 3043,
        goals: 1,
        assists: 1
      }
    }, {
      id: 6,
      name: 'Thilo Kehrer',
      image: '/assets/img/players/card-kherer.jpg',
      position: 'Defender',
      number: 4,
      statistic: {
        appearances: 40,
        minutes_played: 2952,
        goals: 1,
        assists: 2
      }
    }, {
      id: 7,
      name: 'Marquinhos',
      image: '/assets/img/players/card-marquinhos.jpg',
      position: 'Defender',
      number: 5,
      statistic: {
        appearances: 44,
        minutes_played: 3860,
        goals: 4,
        assists: 2
      }
    }, {
      id: 8,
      name: 'Thomas Meunier',
      image: '/assets/img/players/card-meunier.jpg',
      position: 'Defender',
      number: 12,
      statistic: {
        appearances: 31,
        minutes_played: 2360,
        goals: 5,
        assists: 5
      }
    }, {
      id: 9,
      name: 'Dani Alves',
      image: '/assets/img/players/card-alves.jpg',
      position: 'Defender',
      number: 13,
      statistic: {
        appearances: 32,
        minutes_played: 2247,
        goals: 3,
        assists: 7
      }
    }, {
      id: 10,
      name: 'Juan Bernat',
      image: '/assets/img/players/card-bernat.jpg',
      position: 'Defender',
      number: 14,
      statistic: {
        appearances: 41,
        minutes_played: 3208,
        goals: 4,
        assists: 2
      }
    }, {
      id: 11,
      name: 'Layvin Kurzawa',
      image: '/assets/img/players/card-kurzawa.jpg',
      position: 'Defender',
      number: 20,
      statistic: {
        appearances: 21,
        minutes_played: 1149,
        goals: 1,
        assists: 2
      }
    }, {
      id: 12,
      name: 'Colin Dagba',
      image: '/assets/img/players/card-dagba.jpg',
      position: 'Defender',
      number: 31,
      statistic: {
        appearances: 22,
        minutes_played: 1154,
        goals: '0',
        assists: 2
      }
    }, {
      id: 13,
      name: 'Stanley N\'Soki',
      image: '/assets/img/players/card-nsoki.jpg',
      position: 'Defender',
      number: 34,
      statistic: {
        appearances: 15,
        minutes_played: 882,
        goals: '0',
        assists: 2
      }
    }]
  }, {
    positionName: 'Midfielders',
    members: [{
      id: 14,
      name: 'Marco Verratti',
      image: '/assets/img/players/card-verratti.jpg',
      position: 'Midfielder',
      number: 6,
      statistic: {
        appearances: 38,
        minutes_played: 2907,
        goals: 1,
        assists: 3
      }
    }, {
      id: 15,
      name: 'Leonardo Paredes',
      image: '/assets/img/players/card-paredes.jpg',
      position: 'Midfielder',
      number: 8,
      statistic: {
        appearances: 22,
        minutes_played: 1577,
        goals: '0',
        assists: 2
      }
    }, {
      id: 16,
      name: 'Angel Di Maria',
      image: '/assets/img/players/card-dimaria.jpg',
      position: 'Midfielder',
      number: 11,
      statistic: {
        appearances: 45,
        minutes_played: 3499,
        goals: 19,
        assists: 16
      }
    }, {
      id: 17,
      name: 'Julian Draxler',
      image: '/assets/img/players/card-draxler.jpg',
      position: 'Midfielder',
      number: 23,
      statistic: {
        appearances: 46,
        minutes_played: 2977,
        goals: 5,
        assists: 11
      }
    }, {
      id: 18,
      name: 'Christopher Nkunku',
      image: '/assets/img/players/card-nkunku.jpg',
      position: 'Midfielder',
      number: 24,
      statistic: {
        appearances: 29,
        minutes_played: 1490,
        goals: 4,
        assists: 2
      }
    }, {
      id: 19,
      name: 'Adrrien Rabiot',
      image: '/assets/img/players/card-rabiot.jpg',
      position: 'Midfielder',
      number: 25,
      statistic: {
        appearances: 20,
        minutes_played: 1436,
        goals: 2,
        assists: 2
      }
    }]
  }, {
    positionName: 'Forwards',
    members: [{
      id: 20,
      name: 'Kylian Mbappe',
      image: '/assets/img/players/card-mbappe.jpg',
      position: 'Forward',
      number: 7,
      statistic: {
        appearances: 43,
        minutes_played: 3520,
        goals: 39,
        assists: 15
      }
    }, {
      id: 21,
      name: 'Edison Cavani',
      image: '/assets/img/players/card-cavani.jpg',
      position: 'Forward',
      number: 9,
      statistic: {
        appearances: 33,
        minutes_played: 2386,
        goals: 23,
        assists: 7
      }
    }, {
      id: 22,
      name: 'Neymar Jr',
      image: '/assets/img/players/card-neymar.jpg',
      position: 'Forward',
      number: 10,
      statistic: {
        appearances: 28,
        minutes_played: 2349,
        goals: 23,
        assists: 11
      }
    }, {
      id: 23,
      name: 'Eric-Maxim Choupo-Moting',
      image: '/assets/img/players/card-choupot-moting.jpg',
      position: 'Forward',
      number: 17,
      statistic: {
        appearances: 31,
        minutes_played: 1268,
        goals: 3,
        assists: 2
      }
    }, {
      id: 24,
      name: 'Moussa Diaby',
      image: '/assets/img/players/card-diaby.jpg',
      position: 'Forward',
      number: 27,
      statistic: {
        appearances: 34,
        minutes_played: 1527,
        goals: 4,
        assists: 7
      }
    }]
  }, {
    positionName: 'Technical Staff',
    members: [{
      id: 25,
      name: 'Thomas Tuchel',
      image: '/assets/img/players/card-tuchel.jpg',
      position: 'Coach'
    },{
      id: 26,
      name: 'Arno Michels',
      image: '/assets/img/players/card-michels.jpg',
      position: 'Assistant Coach'
    }]
  }, {
    positionName: 'Medical Staff',
    members: [{
      id: 27,
      name: 'Jerome Andral',
      image: '/assets/img/players/card-andral.jpg',
      position: 'Physioterapist'
    }]
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
