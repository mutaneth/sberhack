const data = {
  count: 4,
  boards: [
    {
      name: 'Доска SCRUM',
      id: 5,
      sprint: {
        originBoardId: 5,
        goal: '',
        endDate: '2019-11-07T09:50:10.000Z',
        name: 'Доска Спринт 2',
        self: 'https://hacathon.atlassian.net/rest/agile/1.0/sprint/2',
        id: 2,
        state: 'active',
        startDate: '2019-10-24T09:50:12.487Z',
      },
      project: {
        simplified: true,
        name: '25й этаж',
        self: 'https://hacathon.atlassian.net/rest/api/2/project/10003',
        id: '10003',
        projectTypeKey: 'software',
        key: 'SCRUM',
      },
      issues: {
        todo: [
          {
            issuetype: 'Bug',
            sprint: 2,
            name: 'SCRUM-9',
            description: 'баг',
            id: '10018',
            status: 'todo',
            bug_stand: 'DEV',
          },
          {
            issuetype: 'Bug',
            sprint: 2,
            name: 'SCRUM-11',
            description: 'kjnnkknknjkjnjko',
            id: '10020',
            status: 'todo',
            bug_stand: 'PSI',
          },
          {
            sprint: 2,
            name: 'SCRUM-4',
            description: 'Это описание таски четыре',
            id: '10013',
            status: 'todo',
          },
          {
            sprint: 2,
            name: 'SCRUM-5',
            description: 'Description\n\nОписание таски БАГА верстки',
            id: '10014',
            status: 'todo',
          },
        ],
        Done: [
          {
            sprint: 2,
            name: 'SCRUM-2',
            description: 'Вот так описание таски второй',
            id: '10011',
            status: 'Done',
          },
        ],
        INPROGRESS: [
          {
            sprint: 2,
            name: 'SCRUM-7',
            description: 'Описание логичного бага',
            id: '10016',
            status: 'INPROGRESS',
          },
          {
            sprint: 2,
            name: 'SCRUM-3',
            description: 'Это таска третье описание',
            id: '10012',
            status: 'INPROGRESS',
          },
          {
            issuetype: 'Bug',
            sprint: 2,
            name: 'SCRUM-10',
            description: null,
            id: '10019',
            status: 'INPROGRESS',
            bug_stand: 'IFT',
          },
        ],
      },
    },
    {
      name: 'Доска SCRM',
      id: 6,
      sprint: {
        originBoardId: 6,
        goal: 'Нужно добить продукт',
        endDate: '2019-11-07T19:49:40.000Z',
        name: 'Доска Спринт 1',
        self: 'https://hacathon.atlassian.net/rest/agile/1.0/sprint/3',
        id: 3,
        state: 'active',
        startDate: '2019-10-24T19:49:05.474Z',
      },
      project: {
        simplified: true,
        avatarUrls: {
          '48x48':
            'https://hacathon.atlassian.net/secure/projectavatar?pid=10004&avatarId=10410',
          '24x24':
            'https://hacathon.atlassian.net/secure/projectavatar?size=small&s=small&pid=10004&avatarId=10410',
          '16x16':
            'https://hacathon.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10004&avatarId=10410',
          '32x32':
            'https://hacathon.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10004&avatarId=10410',
        },
        name: 'Лаборатория роботехники',
        self: 'https://hacathon.atlassian.net/rest/api/2/project/10004',
        id: '10004',
        projectTypeKey: 'software',
        key: 'SCRM',
      },
      issues: {
        TODO: [
          {
            sprint: 3,
            name: 'SCRM-6',
            description: 'Описание задачи шестой',
            id: '10026',
            status: 'TODO',
          },
          {
            sprint: 3,
            name: 'SCRM-4',
            description: 'Танцуй под бузову',
            id: '10024',
            status: 'TODO',
          },
          {
            sprint: 3,
            name: 'SCRM-3',
            description: 'Пичему',
            id: '10023',
            status: 'TODO',
          },
        ],
        Done: [
          {
            sprint: 3,
            name: 'SCRM-1',
            description: 'Обучил модельку',
            id: '10021',
            status: 'Done',
          },
        ],
        INPROGRESS: [
          {
            sprint: 3,
            name: 'SCRM-5',
            description: 'Поавпловдаопдолвапдл',
            id: '10025',
            status: 'INPROGRESS',
          },
          {
            sprint: 3,
            name: 'SCRM-7',
            description: 'Чирик',
            id: '10027',
            status: 'INPROGRESS',
          },
          {
            sprint: 3,
            name: 'SCRM-2',
            description: 'Дали видеокарту',
            id: '10022',
            status: 'INPROGRESS',
          },
        ],
      },
    },
    {
      name: 'Доска SMAR',
      id: 7,
      sprint: {
        originBoardId: 7,
        goal: '',
        endDate: '2019-11-07T21:01:49.000Z',
        name: 'Доска Спринт 1',
        self: 'https://hacathon.atlassian.net/rest/agile/1.0/sprint/4',
        id: 4,
        state: 'active',
        startDate: '2019-10-24T21:01:51.353Z',
      },
      project: {
        simplified: true,
        avatarUrls: {
          '48x48':
            'https://hacathon.atlassian.net/secure/projectavatar?pid=10005&avatarId=10413',
          '24x24':
            'https://hacathon.atlassian.net/secure/projectavatar?size=small&s=small&pid=10005&avatarId=10413',
          '16x16':
            'https://hacathon.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10005&avatarId=10413',
          '32x32':
            'https://hacathon.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10005&avatarId=10413',
        },
        name: 'SMART офис',
        self: 'https://hacathon.atlassian.net/rest/api/2/project/10005',
        id: '10005',
        projectTypeKey: 'software',
        key: 'SMAR',
      },
      issues: {
        TODO: [
          {
            sprint: 4,
            name: 'SMAR-3',
            description: null,
            id: '10034',
            status: 'TODO',
          },
          {
            sprint: 4,
            name: 'SMAR-2',
            description: null,
            id: '10033',
            status: 'TODO',
          },
        ],
        INPROGRESS: [
          {
            sprint: 4,
            name: 'SMAR-1',
            description: 'Здесь описание задачи',
            id: '10028',
            status: 'INPROGRESS',
          },
          {
            sprint: 4,
            name: 'SMAR-4',
            description: null,
            id: '10035',
            status: 'INPROGRESS',
          },
          {
            sprint: 4,
            name: 'SMAR-5',
            description: null,
            id: '10036',
            status: 'INPROGRESS',
          },
        ],
      },
    },
    {
      name: 'Доска CLYE',
      id: 8,
      sprint: {
        originBoardId: 8,
        goal: '',
        endDate: '2019-11-07T21:02:41.000Z',
        name: 'Доска Спринт 1',
        self: 'https://hacathon.atlassian.net/rest/agile/1.0/sprint/5',
        id: 5,
        state: 'active',
        startDate: '2019-10-24T21:02:43.454Z',
      },
      project: {
        simplified: true,
        avatarUrls: {
          '48x48':
            'https://hacathon.atlassian.net/secure/projectavatar?pid=10006&avatarId=10409',
          '24x24':
            'https://hacathon.atlassian.net/secure/projectavatar?size=small&s=small&pid=10006&avatarId=10409',
          '16x16':
            'https://hacathon.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10006&avatarId=10409',
          '32x32':
            'https://hacathon.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10006&avatarId=10409',
        },
        name: 'Сенат',
        self: 'https://hacathon.atlassian.net/rest/api/2/project/10006',
        id: '10006',
        projectTypeKey: 'software',
        key: 'CLYE',
      },
      issues: {
        TODO: [
          {
            sprint: 5,
            name: 'CLYE-2',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat.',
            id: '10030',
            status: 'TODO',
          },
          {
            sprint: 5,
            name: 'CLYE-3',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat.',
            id: '10031',
            status: 'TODO',
          },
        ],
        INPROGRESS: [
          {
            sprint: 5,
            name: 'CLYE-1',
            description: 'ЗАпилить фичу добавления приватных совещаний',
            id: '10029',
            status: 'INPROGRESS',
          },
          {
            sprint: 5,
            name: 'CLYE-4',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat.',
            id: '10032',
            status: 'INPROGRESS',
          },
        ],
      },
    },
  ],
};
export default data;
