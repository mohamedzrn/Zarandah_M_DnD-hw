# Plan:

    Problem 1: The user can drag and drop more than one puzzle piece into a drop zone. This shouldn’t happen. There should only be one piece in one drop zone at a time.
    Solution: In the handleDrop function, we can first remove any puzzle piece that is currently in the drop zone before appending the dragged piece. This will ensure that there is only one piece in each drop zone.

    Problem 2: Pieces appear in the drop zones on reset / choosing a new puzzle. Those should be removed / reparented back to the drag zone as well, so that the player has a fresh board to drop onto.
    Solution: We can create a resetBoard function that will be called when the user selects a new puzzle or clicks on the "Reset Puzzle" button. This function will loop through all the drop zones and reparent any puzzle pieces back to the "puzzle-pieces" div. We can also call this function at the beginning of the changeBgImage function to ensure that the board is always reset when a new puzzle is selected.

# README.md document:

    The README.md document should include the following information:

        Overview of the project
        How to play the puzzle game
        List of bugs and their solutions
        List of technologies used
        Installation instructions
        Known issues and limitations
        Contact information for the developer(s)


# Branches:

    Bug 1: Multiple pieces in drop zone

        Create a new branch called "bug/multiple-pieces-in-dropzone"
        Update the handleDrop function to remove any puzzle pieces currently in the drop zone before appending the dragged piece.
        Test the changes thoroughly.
        Commit and push the changes to the new branch.

    Bug 2: Pieces remain in drop zone after reset

        Create a new branch called "bug/pieces-remain-after-reset"
        Create a new function called resetBoard that will loop through all the drop zones and reparent any puzzle pieces back to the "puzzle-pieces" div.
        Call the resetBoard function at the beginning of the changeBgImage function to ensure that the board is always reset when a new puzzle is selected.
        Test the changes thoroughly.
        Commit and push the changes to the new branch.

        Merging:

        Merge the "bug/multiple-pieces-in-dropzone" and "bug/pieces-remain-after-reset" branches to the master branch.
        Keep all branches in the repo for future reference.