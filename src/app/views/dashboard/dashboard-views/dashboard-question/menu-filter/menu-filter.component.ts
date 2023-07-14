import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bdc-bo-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFilterComponent implements OnInit {
  protected expression = true;
  protected form!: FormGroup;
  protected dateRange!: FormGroup;
  protected states = ['Publicadas', 'Borradores', 'Archivadas'];
  protected categories = [
    '4G UP',
    'celulares',
    'compras',
    'contacto',
    'equipos liberados',
    'equipos moviles',
    'evemtos digitales',
    'mi movistar',
    'pagos y facturacion',
    'productos y servicios',
  ];
  protected subCategories = [
    'consultas de deuda',
    'consumos',
    'planes con factura',
    'llamadas y SMS',
    'factura digital',
    'movistar fibra',
    'planes prepagos',
    'servicios movistar hogar',
    'servicios movistar banda ancha',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setUpForm();
  }

  protected setUpForm() {
    this.dateRange = this.fb.group({
      start: '',
      end: '',
    });
    this.form = this.fb.group({
      state: [''],
      category: [''],
      subCategory: [{ value: '', disabled: true }],
    });
  }

  protected enableSubcategory() {
    this.form.get('subCategory')?.enable();
  }

  protected applyFilters() {
    let form = {
      date: this.dateRange.get('start')?.value + this.dateRange.get('end')?.value,
      status: this.form.get('state')?.value,
      category: this.form.get('category')?.value,
      subcategory: this.form.get('subCategory')?.value,
    };
    alert(JSON.stringify(form));
  }
}
