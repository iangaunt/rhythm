export default class NoteHandler {
    static current = 0;

    static laneNotes: Array<Array<number>> = [];
    static activityBuffer: Array<boolean> = [];

    constructor() {
        for (let i = 0; i < 4; i++) {
            NoteHandler.laneNotes.push([]);
        }
    }
    
    public static addNote(lane: number) {
        console.log(NoteHandler.laneNotes);

        NoteHandler.laneNotes[lane - 1].push(NoteHandler.current);
        NoteHandler.activityBuffer.push(true);

        NoteHandler.current++;
    }

    public static getCurrent() {
        NoteHandler.current++;
        return NoteHandler.current;
    }

    public static checkClosestNote(lane: number) {
        if (NoteHandler.laneNotes[lane - 1].length == 0) return;

        const note = NoteHandler.laneNotes[lane - 1].pop()!;
        NoteHandler.activityBuffer[note] = false;
    }
}