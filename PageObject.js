const LOCATORS = {
    myKanbanPane: ".my-kanban",
    brainstormSection: ".task-titles.queue",
    brainstormItemTitleElement: ".task-tiles.queue .task-tile .title"

};

export default class KanbanBoardPage extends NormalPage {

    constructor() {
        super();
        this.waitForPageAvailable();
    }

    waitForPageAvailable() {
        this._getMyKanbanPane().isVisible();
        this._getBrainstormSection().isVisible();
    }

    isItemPresentUnderBrainstormSection(itemname) {
        for (let elem of this._getBrainstormItemTitleElement().findAll()) {
            if ((elem.getText() === itemName) && elem.isVisible())
                return true;
        }
        return false;
    }

    /*
    *Page element getters
    */

    _getMyKanbanPane(force = false) {
        if (!force && this.myKanbanPane)
            return this.myKanbanPane;
        this.myKanbanPane = new TextView(this, $(LOCATORS.myKanbanPane), "Kanban pane");
        return this.myKanbanPane;
    }
}