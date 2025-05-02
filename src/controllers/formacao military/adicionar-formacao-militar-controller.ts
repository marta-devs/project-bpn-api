import { AddFormacaoMilitarService } from "@/services/formacaoMilitar/add-formacao-militar-service";
import { BaseController } from "../base-controller";

export class AddFormacaoMilitaryController extends BaseController {
  constructor(addFormacaoMilitarService:AddFormacaoMilitarService){
    super(addFormacaoMilitarService)
  }
}