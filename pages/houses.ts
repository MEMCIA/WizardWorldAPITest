export class Houses
{
    housesNamesInHP = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin" ];

    getHousesNameInHPSorted()
    {
        return this.housesNamesInHP.sort();
    }

    getHousesNumberInHP()
    {
        return this.housesNamesInHP.length;
    }

}