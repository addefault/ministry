<?php

require('fpdf.php');

class PDF_reciept extends FPDF { 
    function __construct ($orientation = 'P', $unit = 'pt', $format = 'Letter', $margin = 40) { 
        $this->FPDF($orientation, $unit, $format); 
        $this->SetTopMargin($margin); 
        $this->SetLeftMargin($margin); 
        $this->SetRightMargin($margin); 
        $this->SetAutoPageBreak(true, $margin); 
    } 
}

$pdf = new PDF_receipt(); 
$pdf->AddPage(); 
$pdf->SetFont('Arial', '', 12);
$pdf->SetY(100);
$pdf->Cell(100, 13, "Ordered By");
$pdf->Output('result.pdf', 'F');

$response = ['message' => 'hey'];

echo json_encode($response);