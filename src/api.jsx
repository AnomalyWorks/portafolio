const GAMES_DATA = [
    { id: '11', cat: 'games', state: 'state-w-1', title: 'games-w-11-title', description: 'games-w-11-description', alt: 'Project image'},
    { id: '12', cat: 'games', state: 'state-w-2', title: 'games-w-12-title', description: 'games-w-12-description', alt: 'Project image'},
];

{/*
    { id: '31', cat: 'web', state: 'state-w-2', title: 'web-w-31-title', description: 'web-w-31-description', alt: 'Project image'},
    { id: '37', cat: 'web', state: 'state-w-2', title: 'web-w-37-title', description: 'web-w-37-description', alt: 'Project image'},
    { id: '32', cat: 'web', state: 'state-w-2', title: 'web-w-32-title', description: 'web-w-32-description', alt: 'Project image'},
    { id: '33', cat: 'web', state: 'state-w-2', title: 'web-w-33-title', description: 'web-w-33-description', alt: 'Project image'}, 
    { id: '35', cat: 'web', state: 'state-w-2', title: 'web-w-35-title', description: 'web-w-35-description', alt: 'Project image'},
    
*/}

const WEB_DATA = [
    { id: '34', cat: 'web', state: 'state-w-2', title: 'web-w-34-title', description: 'web-w-34-description', alt: 'Project image'},
    { id: '36', cat: 'web', state: 'state-w-2', title: 'web-w-36-title', description: 'web-w-36-description', alt: 'Project image'},
];



const ART_DATA = [
];

const DESK_DATA = [
];

const WORKS = [
    {id: "games-w", data: GAMES_DATA},
    {id: "web-w", data : WEB_DATA},
    {id: "art-w", data: ART_DATA},
    {id: "desk-w", data: DESK_DATA},
];

const WORKS_FRONT = [
    {id: '11'}
]

const ESPECIAL_WORKS = {
    "the-state-of-nowhere": GAMES_DATA[0],
}

function is_especial_work(id) {
    return Object.hasOwn(ESPECIAL_WORKS, id)
}

export function getWork(id) {
    let work = undefined;
    
    if (!is_especial_work(id)) {

        for (let i = 0; i < WORKS.length; i++) {
            work = WORKS[i].data.find((project) => (
                project.id === id
            ))

            if (work !== undefined) {
                break;
            }
        }
    } else {
        work = ESPECIAL_WORKS[id];
    }
        
    return (work);
}

export function getWorksCat(cat) {
    let worksCat = undefined;

    WORKS.map((workCat) => {
        if (workCat.id === cat+"-w") {
            worksCat = workCat;
        }
    });

    return (worksCat);
}

export function getWorksFront() {
    let worksFront = []

    WORKS_FRONT.map((workF) => {
        let work = getWork(workF.id);

        if (work !== undefined) {
            worksFront.push(work);
        }
    });

    return (worksFront);
}