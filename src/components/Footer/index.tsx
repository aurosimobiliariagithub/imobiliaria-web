import api from '@/services/api'
import { Box, Theme, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import {
  EnvelopeOpen,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import logoFull from '@/assets/logo-full.svg'
import Image from 'next/image'
import codelabz from '../../../public/codelabz.svg'

interface CubProps {
  monthYear: string
  cubValue: string
  monthPercentage: string
  yearPercentage: string
  twelveMonthsPercentage: string
}

export default function Footer() {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  )

  const [cubInformation, setCubinformation] = useState<CubProps>()

  const loadCubinformation = useCallback(async () => {
    const response = await api.get('/cub-information')

    if (response) {
      setCubinformation(response.data)
    }
  }, [])

  useEffect(() => {
    loadCubinformation()
  }, [loadCubinformation])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          background: '#17375F',
          minHeight: '324px',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            alignItems: 'flex-start',
            justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
            maxWidth: '1200px',
            width: '100%',
            margin: 'auto auto',
            gap: 4,
            p: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: { xs: 2, sm: 2, md: 0 },
              width: '100%',
            }}
          >
            <Image src={logoFull} alt="logo" width={160} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              color: 'white',
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              mb: { xs: 2, sm: 2 },
              width: '100%',
              a: {
                textDecoration: 'none',
                color: 'white',
              },
              'a:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Typography variant="body1" sx={{ borderBottom: '1px solid #fff' }}>
              Rio do sul
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MapPin size={20} weight="fill" />
              <Typography variant="body2" flex={1}>
                R. XV de Novembro, 1751 - sala 02, Laranjeiras, Rio do Sul - SC
              </Typography>
            </Box>

            <Link href="https://api.whatsapp.com/send?phone=5547999008090&&text=Olá, vim pelo site, gostaria de mais informações">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsappLogo size={20} weight="fill" />
                <Typography variant="body2">(47) 99900-8090</Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              color: 'white',
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              mb: { xs: 2, sm: 2 },
              width: '100%',
              a: {
                textDecoration: 'none',
                color: 'white',
              },
              'a:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Typography variant="body1" sx={{ borderBottom: '1px solid #fff' }}>
              Balneário Camboriú
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <MapPin size={20} weight="fill" />
              <Typography variant="body2" flex={1}>
                Rua 2000, 121, La Belle Tour Résidence - sala 11, Centro -
                Balneário Camboriú/ SC
              </Typography>
            </Box>

            <Link href="https://api.whatsapp.com/send?phone=5547988163739&&text=Olá, vim pelo site, gostaria de mais informações">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsappLogo size={20} weight="fill" />
                <Typography variant="body2">(47) 98816-3739</Typography>
              </Box>
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              color: 'white',
              width: '100%',
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
              mb: { xs: 2, sm: 2 },
              a: {
                textDecoration: 'none',
                color: 'white',
              },
              'a:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Typography variant="body1" sx={{ borderBottom: '1px solid #fff' }}>
              Contato
            </Typography>
            <Link href="https://www.instagram.com/auroscorretoraimobiliaria/">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <InstagramLogo size={20} weight="fill" />
                <Typography variant="body2">
                  @auroscorretoraimobiliaria
                </Typography>
              </Box>
            </Link>

            <Link href="https://www.facebook.com/AurosCorretoraImob?locale=pt_BR">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FacebookLogo size={20} weight="fill" />
                <Typography variant="body2">
                  @auroscorretoraimobiliaria
                </Typography>
              </Box>
            </Link>

            <Link href="mailto:aurosimobiliaria@gmail.com">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EnvelopeOpen size={20} weight="fill" />
                <Typography variant="body2">
                  aurosimobiliaria@gmail.com
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              color: 'white',
              width: '100%',
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
              mb: { xs: 2, sm: 2 },
            }}
          >
            <Typography variant="body1" sx={{ borderBottom: '1px solid #fff' }}>
              Tabela do CUB SC
            </Typography>

            <Typography variant="body2">
              Mês/Ano : {cubInformation?.monthYear}
            </Typography>
            <Typography variant="body2">
              CUB SC (R$/m²) : {cubInformation?.cubValue}
            </Typography>
            <Typography variant="body2">
              Mês (%) : {cubInformation?.monthPercentage}
            </Typography>
            <Typography variant="body2">
              Ano (%) : {cubInformation?.yearPercentage}
            </Typography>
            <Typography variant="body2">
              12 meses(%) : {cubInformation?.twelveMonthsPercentage}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: '#153358',
          minHeight: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row',
            gap: isSmallScreen ? 1 : 0,
            justifyContent: 'space-between',
            maxWidth: '1200px',
            width: '100%',
            margin: 'auto auto',
            px: 1,
          }}
        >
          <Typography variant="caption">
            {`Auros corretora imobiliária - CRECI-SC 7018-J (Rio do Sul ) CRECI-SC 8732-J (Balneário Camboriú)`}
          </Typography>

          <Link
            href="https://www.codelabz.com.br/"
            style={{
              gap: 2,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Typography
              variant={isSmallScreen ? 'caption' : 'caption'}
              color="#fff"
              sx={{
                mr: 1,
                ':hover': {
                  opacity: 0.8,
                },
              }}
            >
              Desenvolvido por :
            </Typography>
            <Image
              src={codelabz}
              alt="Desenvolvido pela empresa codelabz"
              width={20}
              height={20}
            />
          </Link>
        </Box>
      </Box>
    </>
  )
}
