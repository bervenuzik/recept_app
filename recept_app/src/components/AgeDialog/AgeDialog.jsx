import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export default function AgeDialog({ open, onConfirm, onReject }) {
    return (
        <Dialog
            open={open}
            onClose={onReject} // Close the modal if they choose not to verify age
            aria-labelledby="age-dialog-title"
            aria-describedby="age-dialog-description">

            <DialogTitle id="age-dialog-title">
                {"Är du över 25 år?"}
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="age-dialog-description">
                    Denna webbplats innehåller information om alkoholhaltiga drycker och riktar sig till dig som fyllt 25 år.
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onReject} color="secondary">
                    Nej
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Ja, jag är över 25 år
                </Button>
            </DialogActions>

        </Dialog>
    );
}