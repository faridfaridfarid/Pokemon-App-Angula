import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component'
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';





@NgModule({
	imports: [
        CommonModule,     //module par defaut à importer pour tout nos sous modules, dans le module principale on à le browserModule
		FormsModule,
		PokemonRoutingModule
    ],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PokemonFormComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [PokemonsService]
})
export class PokemonsModule { }