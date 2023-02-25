import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { FieldGroup } from "../../components/FormGroup/FormGroup";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Select } from "../../components/Select/Select";
import { Upload } from "../../components/Upload/Upload";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Title } from "../../components/Title/Title";

export const Settings = () => {
  return (
    <PrivatePage>
      <Grid container className=" p-5 lg:px-20 lg:pt-20 ">
        <Grid item xs={12} lg={12}>
          <Title size="2">Configurações</Title>
        </Grid>

        <Grid item xs={12} lg={12}>
          <form
            action=""
            className="px-30 flex h-[800px] flex-col gap-10 py-10"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Title>Status do estabelecimento</Title>
              <Grid container className="flex" spacing={2}>
                <Grid item lg={6} sm={12} xs={12}>
                  <span className="w-full">
                    <FieldGroup name="status" label="Status do estabelecimento">
                      <Select name="status" options={[]}></Select>
                    </FieldGroup>
                  </span>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <span className="flex w-full justify-end">
                    <span className="flex h-[100px] w-[250px] justify-end">
                      <Upload></Upload>
                    </span>
                  </span>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Title>Dados da empresa</Title>
              <Grid item lg={6} sm={12} xs={12}>
                <FieldGroup name="name" label="Nome da empresa">
                  <Input name="name" variant="outlined"></Input>
                </FieldGroup>
                <FieldGroup name="whatsapp" label="Whatsapp">
                  <Input name="whatsapp" variant="outlined"></Input>
                </FieldGroup>
              </Grid>

              <Grid item lg={6} sm={12} xs={12}>
                <FieldGroup name="address" label="Endereço">
                  <Input name="address" variant="outlined"></Input>
                </FieldGroup>
                <FieldGroup name="phone" label="Telefone">
                  <Input name="phone" variant="outlined"></Input>
                </FieldGroup>
              </Grid>
            </Box>

            <Box>
              <Title>Área de atendimento</Title>
              <div className="flex flex-col gap-2">
                <CheckBox>
                  <span>Alto da XV</span>
                </CheckBox>
                <CheckBox>
                  <span>Bairro alto</span>
                </CheckBox>
                <CheckBox>
                  <span>Centro</span>
                </CheckBox>
              </div>
            </Box>

            <Box>
              <Title>Dias de atendimento</Title>
              <div className="flex flex-wrap gap-2">
                <CheckBox>
                  <div>Segunda</div>
                </CheckBox>
                <CheckBox>
                  <div>Terça</div>
                </CheckBox>
                <CheckBox>
                  <div>Quarta</div>
                </CheckBox>
                <CheckBox>
                  <div>Quinta</div>
                </CheckBox>
                <CheckBox>
                  <div>Sexta</div>
                </CheckBox>
                <CheckBox>
                  <div>Sábado</div>
                </CheckBox>
                <CheckBox>
                  <div>Domingo</div>
                </CheckBox>
              </div>
            </Box>

            <Box>
              <Title>Horários da semana</Title>
              <div>Parar no horario de almoço</div>
              <div>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={2}
                    className="flex items-center gap-2"
                  >
                    <Input variant="outlined"></Input>
                    <span>às</span>
                    <Input variant="outlined"></Input>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={2}
                    className="flex items-center gap-2"
                  >
                    <Input variant="outlined"></Input>
                    <span>às</span>
                    <Input variant="outlined"></Input>
                  </Grid>
                </Grid>
              </div>
            </Box>

            <Box>
              <Title>Horários nos finais de semana</Title>
              <div>Parar no horario de almoço</div>
              <div>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={2}
                    className="flex w-full items-center gap-2"
                  >
                    <Input variant="outlined"></Input>
                    <span>às</span>
                    <Input variant="outlined"></Input>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={2}
                    className="flex w-full items-center gap-2"
                  >
                    <Input variant="outlined"></Input>
                    <span>às</span>
                    <Input variant="outlined"></Input>
                  </Grid>
                </Grid>
              </div>
            </Box>

            <div className="w-full py-10">
              <Button stretch>SALVAR</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </PrivatePage>
  );
};

export default Settings;
